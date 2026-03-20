# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

from unittest.mock import patch

from django.core.management import call_command
from django.test import TestCase
from ldap3 import MOCK_SYNC, Connection, Server

from coldfront.core.test_helpers.factories import ProjectFactory, ProjectUserFactory, UserFactory
from coldfront.plugins.project_openldap import tasks


class TasksTest(TestCase):
    @classmethod
    def setUpClass(cls):
        call_command("add_default_project_choices")
        super(TasksTest, cls).setUpClass()

    @classmethod
    def setUpTestData(cls):
        cls.pi = UserFactory(username="pi_user")
        cls.project = ProjectFactory(
            pi=cls.pi,
            title="A very descriptive project title",
            project_code="proj001",
            institution="Example Institute",
        )
        cls.project_member = UserFactory(username="member_user")
        cls.project_user = ProjectUserFactory(project=cls.project, user=cls.project_member)

    def setUp(self):
        self.project_ou = "ou=projects,dc=example,dc=org"
        self.archive_ou = "ou=archive,dc=example,dc=org"
        self.bind_user = "cn=test_bind,dc=example,dc=org"
        self.bind_password = "bind_password"
        self.gid_start = 8000
        self.mock_server = Server("mock_ldap")
        self.mock_connection = Connection(
            self.mock_server,
            user=self.bind_user,
            password=self.bind_password,
            client_strategy=MOCK_SYNC,
        )
        self.mock_connection.strategy.add_entry(
            "dc=example,dc=org",
            {"objectClass": ["top", "domain"], "dc": ["example"]},
        )
        self.mock_connection.strategy.add_entry(
            self.project_ou,
            {"objectClass": ["top", "organizationalUnit"], "ou": ["projects"]},
        )
        self.mock_connection.strategy.add_entry(
            self.archive_ou,
            {"objectClass": ["top", "organizationalUnit"], "ou": ["archive"]},
        )
        self.mock_connection.strategy.add_entry(
            self.bind_user,
            {
                "objectClass": ["top", "person"],
                "cn": ["test_bind"],
                "sn": ["test_bind"],
                "userPassword": [self.bind_password],
            },
        )

        def openldap_connection_mock(_server_opt, _bind_user, _bind_password):
            self.mock_connection.bind()
            return self.mock_connection

        self.openldap_conn_patch = patch(
            "coldfront.plugins.project_openldap.utils.openldap_connection",
            side_effect=openldap_connection_mock,
        )
        self.openldap_conn_patch.start()
        self.addCleanup(self.openldap_conn_patch.stop)
        self.tasks_constants_patch = patch.multiple(
            tasks,
            PROJECT_OPENLDAP_OU=self.project_ou,
            PROJECT_OPENLDAP_ARCHIVE_OU=self.archive_ou,
            PROJECT_OPENLDAP_GID_START=self.gid_start,
            PROJECT_OPENLDAP_REMOVE_PROJECT=True,
        )
        self.tasks_constants_patch.start()
        self.addCleanup(self.tasks_constants_patch.stop)
        self.utils_constants_patch = patch.multiple(
            "coldfront.plugins.project_openldap.utils",
            PROJECT_OPENLDAP_OU=self.project_ou,
            PROJECT_OPENLDAP_ARCHIVE_OU=self.archive_ou,
            PROJECT_OPENLDAP_BIND_USER=self.bind_user,
            PROJECT_OPENLDAP_BIND_PASSWORD=self.bind_password,
            PROJECT_OPENLDAP_DESCRIPTION_TITLE_LENGTH=100,
        )
        self.utils_constants_patch.start()
        self.addCleanup(self.utils_constants_patch.stop)

    def _project_ou_dn(self):
        return f"ou={self.project.project_code},{self.project_ou}"

    def _project_group_dn(self):
        return f"cn={self.project.project_code},ou={self.project.project_code},{self.project_ou}"

    def _project_archived_ou_dn(self):
        return f"ou={self.project.project_code},{self.archive_ou}"

    def _project_archived_group_dn(self):
        return f"cn={self.project.project_code},ou={self.project.project_code},{self.archive_ou}"

    def _search(self, dn, ldap_filter, attributes=None):
        self.mock_connection.bind()
        if attributes is None:
            return self.mock_connection.search(dn, ldap_filter)
        return self.mock_connection.search(dn, ldap_filter, attributes=attributes)

    def _member_uids(self, dn):
        self._search(dn, "(objectclass=posixGroup)", attributes=["memberUid"])
        self.assertEqual(len(self.mock_connection.entries), 1)
        return set(self.mock_connection.entries[0].memberUid.values)

    def _description(self, dn):
        self._search(dn, "(objectclass=posixGroup)", attributes=["description"])
        self.assertEqual(len(self.mock_connection.entries), 1)
        return str(self.mock_connection.entries[0].description)

    def _gid(self, dn):
        self._search(dn, "(objectclass=posixGroup)", attributes=["gidNumber"])
        self.assertEqual(len(self.mock_connection.entries), 1)
        return int(self.mock_connection.entries[0].gidNumber.value)

    def test_openldap_add_project(self):
        tasks.add_project(self.project)
        self.assertTrue(self._search(self._project_ou_dn(), "(objectclass=organizationalUnit)"))
        self.assertTrue(self._search(self._project_group_dn(), "(objectclass=posixGroup)"))
        self.assertIn(self.project.pi.username, self._member_uids(self._project_group_dn()))
        self.assertEqual(self._gid(self._project_group_dn()), self.project.pk + self.gid_start)

    def test_openldap_remove_project(self):
        tasks.add_project(self.project)
        with (
            patch.object(tasks, "PROJECT_OPENLDAP_REMOVE_PROJECT", True),
            patch.object(
                tasks,
                "PROJECT_OPENLDAP_ARCHIVE_OU",
                "",
            ),
        ):
            tasks.remove_project(self.project)
        self.assertFalse(self._search(self._project_group_dn(), "(objectclass=posixGroup)"))
        self.assertFalse(self._search(self._project_ou_dn(), "(objectclass=organizationalUnit)"))

    def test_openldap_archive_project(self):
        tasks.add_project(self.project)
        with (
            patch.object(tasks, "PROJECT_OPENLDAP_REMOVE_PROJECT", False),
            patch.object(
                tasks,
                "PROJECT_OPENLDAP_ARCHIVE_OU",
                self.archive_ou,
            ),
            patch(
                "coldfront.plugins.project_openldap.utils.PROJECT_OPENLDAP_ARCHIVE_OU",
                self.archive_ou,
            ),
        ):
            tasks.remove_project(self.project)
        self.assertFalse(self._search(self._project_ou_dn(), "(objectclass=organizationalUnit)"))
        self.assertTrue(self._search(self._project_archived_ou_dn(), "(objectclass=organizationalUnit)"))

    def test_openldap_update_project(self):
        tasks.add_project(self.project)
        self.project.title = "Updated title for LDAP description"
        tasks.update_project(self.project)
        description = self._description(self._project_group_dn())
        self.assertIn("Updated title for LDAP description", description)

    def test_openldap_add_user_project(self):
        tasks.add_project(self.project)
        tasks.add_user_project(self.project_user.pk)
        member_uids = self._member_uids(self._project_group_dn())
        self.assertIn(self.project.pi.username, member_uids)
        self.assertIn(self.project_member.username, member_uids)

    def test_openldap_remove_user_project(self):
        tasks.add_project(self.project)
        tasks.add_user_project(self.project_user.pk)
        tasks.remove_user_project(self.project_user.pk)
        member_uids = self._member_uids(self._project_group_dn())
        self.assertIn(self.project.pi.username, member_uids)
        self.assertNotIn(self.project_member.username, member_uids)
