# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

from unittest.mock import patch

from django.core.management import call_command
from django.test import TestCase

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

    @patch("coldfront.plugins.project_openldap.tasks.allocate_project_openldap_gid", return_value=8123)
    @patch("coldfront.plugins.project_openldap.tasks.add_members_to_openldap_posixgroup")
    @patch("coldfront.plugins.project_openldap.tasks.add_posixgroup_to_openldap")
    @patch("coldfront.plugins.project_openldap.tasks.add_per_project_ou_to_openldap")
    def test_openldap_add_project(
        self,
        add_per_project_ou_to_openldap_mock,
        add_posixgroup_to_openldap_mock,
        add_members_to_openldap_posixgroup_mock,
        allocate_project_openldap_gid_mock,
    ):
        tasks.add_project(self.project)

        expected_ou_dn = f"ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"
        expected_posix_dn = f"cn={self.project.project_code},ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"

        add_per_project_ou_to_openldap_mock.assert_called_once_with(
            self.project,
            expected_ou_dn,
            f"OU for project {self.project.project_code}",
        )
        allocate_project_openldap_gid_mock.assert_called_once_with(self.project.pk, tasks.PROJECT_OPENLDAP_GID_START)
        add_posixgroup_to_openldap_mock.assert_called_once()
        self.assertEqual(add_posixgroup_to_openldap_mock.call_args.args[0], expected_posix_dn)
        self.assertEqual(add_posixgroup_to_openldap_mock.call_args.args[2], 8123)
        add_members_to_openldap_posixgroup_mock.assert_called_once_with(
            expected_posix_dn,
            [self.project.pi.username],
        )

    @patch("coldfront.plugins.project_openldap.tasks.remove_dn_from_openldap")
    def test_openldap_remove_project(self, remove_dn_from_openldap_mock):
        with (
            patch.object(tasks, "PROJECT_OPENLDAP_REMOVE_PROJECT", True),
            patch.object(
                tasks,
                "PROJECT_OPENLDAP_ARCHIVE_OU",
                "",
            ),
        ):
            tasks.remove_project(self.project)

        expected_ou_dn = f"ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"
        expected_posix_dn = f"cn={self.project.project_code},ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"
        remove_dn_from_openldap_mock.assert_any_call(expected_posix_dn)
        remove_dn_from_openldap_mock.assert_any_call(expected_ou_dn)
        self.assertEqual(remove_dn_from_openldap_mock.call_count, 2)

    @patch("coldfront.plugins.project_openldap.tasks.move_dn_in_openldap")
    @patch("coldfront.plugins.project_openldap.tasks.remove_dn_from_openldap")
    def test_openldap_archive_project(self, remove_dn_from_openldap_mock, move_dn_in_openldap_mock):
        with (
            patch.object(tasks, "PROJECT_OPENLDAP_REMOVE_PROJECT", False),
            patch.object(
                tasks,
                "PROJECT_OPENLDAP_ARCHIVE_OU",
                "ou=archive,dc=example,dc=org",
            ),
        ):
            tasks.remove_project(self.project)

        expected_ou_dn = f"ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"
        move_dn_in_openldap_mock.assert_called_once_with(
            expected_ou_dn,
            f"ou={self.project.project_code}",
            "ou=archive,dc=example,dc=org",
        )
        remove_dn_from_openldap_mock.assert_not_called()

    @patch("coldfront.plugins.project_openldap.tasks.update_posixgroup_description_in_openldap")
    def test_openldap_update_project(self, update_posixgroup_description_in_openldap_mock):
        tasks.update_project(self.project)

        expected_posix_dn = f"cn={self.project.project_code},ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"
        update_posixgroup_description_in_openldap_mock.assert_called_once()
        self.assertEqual(
            update_posixgroup_description_in_openldap_mock.call_args.args[0],
            expected_posix_dn,
        )

    @patch("coldfront.plugins.project_openldap.tasks.add_members_to_openldap_posixgroup")
    def test_openldap_add_user_project(self, add_members_to_openldap_posixgroup_mock):
        tasks.add_user_project(self.project_user.pk)

        expected_posix_dn = f"cn={self.project.project_code},ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"
        add_members_to_openldap_posixgroup_mock.assert_called_once_with(
            expected_posix_dn,
            [self.project_member.username],
        )

    @patch("coldfront.plugins.project_openldap.tasks.remove_members_from_openldap_posixgroup")
    def test_openldap_remove_user_project(self, remove_members_from_openldap_posixgroup_mock):
        tasks.remove_user_project(self.project_user.pk)

        expected_posix_dn = f"cn={self.project.project_code},ou={self.project.project_code},{tasks.PROJECT_OPENLDAP_OU}"
        remove_members_from_openldap_posixgroup_mock.assert_called_once_with(
            expected_posix_dn,
            [self.project_member.username],
        )
