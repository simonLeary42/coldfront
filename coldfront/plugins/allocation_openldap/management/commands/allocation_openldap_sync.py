# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

"""Coldfront allocation_openldap plugin - django management command -  allocation_openldap_sync.py"""

import logging

from django.core.management.base import BaseCommand, CommandError

from coldfront.core.project.models import (
    Project,
    ProjectStatusChoice,
    ProjectUser,
    ProjectUserStatusChoice,
)
# from coldfront.plugins.project_openldap.utils import

# OpenLDAP (ldap3) connections formed in utils.py
from coldfront.core.utils.common import import_from_settings

# NEW or ACTIVE status projects not known to OpenLDAP at all can simply be added as normal, using tasks.py function
# Normal deletion also handled by tasks.py method
from coldfront.plugins.project_openldap.tasks import add_project, remove_project

# this script relies HEAVILY on utils.py
from coldfront.plugins.project_openldap.utils import (
    add_members_to_openldap_posixgroup,
    add_per_project_ou_to_openldap,
    add_posixgroup_to_openldap,
    allocate_project_openldap_gid,
    archive_project_in_openldap,
    construct_dn_archived_str,
    construct_dn_str,
    construct_ou_archived_dn_str,
    construct_ou_dn_str,
    construct_per_project_ou_relative_dn_str,
    construct_project_ou_description,
    construct_project_posixgroup_description,
    ldapsearch_check_project_dn,
    ldapsearch_get_description,
    ldapsearch_get_posixGroup_memberuids,
    remove_members_from_openldap_posixgroup,
    update_posixgroup_description_in_openldap,
)
from coldfront.plugins.project_openldap.management.commands.project_openldap_sync import (
    Command as ProjectOpenLDAPCommand
)

# NOTE: functions starting with 'local_' or 'handle_' are local to this script

PROJECT_CODE = import_from_settings("PROJECT_CODE")

PROJECT_OPENLDAP_GID_START = import_from_settings("PROJECT_OPENLDAP_GID_START")
PROJECT_OPENLDAP_OU = import_from_settings("PROJECT_OPENLDAP_OU")
PROJECT_OPENLDAP_REMOVE_PROJECT = import_from_settings("PROJECT_OPENLDAP_REMOVE_PROJECT")
PROJECT_OPENLDAP_ARCHIVE_OU = import_from_settings("PROJECT_OPENLDAP_ARCHIVE_OU")

PROJECT_OPENLDAP_EXCLUDE_USERS = import_from_settings("PROJECT_OPENLDAP_EXCLUDE_USERS")

logger = logging.getLogger(__name__)

# affirm project status choices
PROJECT_STATUS_CHOICE_NEW = ProjectStatusChoice.objects.get(name="New").pk
PROJECT_STATUS_CHOICE_ACTIVE = ProjectStatusChoice.objects.get(name="Active").pk
PROJECT_STATUS_CHOICE_ARCHIVED = ProjectStatusChoice.objects.get(name="Archived").pk
# affirm project user status choices
PROJECTUSER_STATUS_CHOICE_ACTIVE = ProjectUserStatusChoice.objects.get(name="Active").pk

# where project_dn var is used -> posixgroup DN
# where archive_dn var is used -> posixgroup DN in archive
# where DN var is used, can be any DN
# where DNs are passed to functions it is often to self.stdout.write before an action


# --------------------------------------------------------------------------------------------------------
class Command(ProjectOpenLDAPCommand):
    help = "Sync projects and memberUids in OpenLDAP (from Coldfront)"

    def add_arguments(self, parser):
        parser.add_argument(
            "-a",
            "--all",
            help="Check all OpenLDAP projects against Coldfront-django",
            action="store_true",
        )
        parser.add_argument(
            "-p",
            "--projectgroup",
            help="Check specific group in OpenLDAP against Coldfront-django",
        )
        parser.add_argument("-s", "--sync", help="Sync changes to OpenLDAP", action="store_true")
        parser.add_argument(
            "-z",
            "--writearchive",
            help="Enable writing to the OpenLDAP archive OU",
            action="store_true",
        )
        parser.add_argument(
            "-d",
            "--updatedescription",
            help="Update project description in OpenLDAP (which includes title)",
            action="store_true",
        )
        parser.add_argument(
            "-x",
            "--skiparchived",
            help="Skip projects with archived status in Coldfront",
            action="store_true",
        )
        parser.add_argument(
            "-e",
            "--skipnewactive",
            help="Skip projects with New or Active status in Coldfront",
            action="store_true",
        )

    def handle(self, *args, **options):
        verbosity = int(options["verbosity"])
        root_logger = logging.getLogger("")
        if verbosity == 0:
            root_logger.setLevel(logging.ERROR)
        elif verbosity == 2:
            root_logger.setLevel(logging.INFO)
        elif verbosity == 3:
            root_logger.setLevel(logging.DEBUG)
        else:
            root_logger.setLevel(logging.WARNING)

        self.sync = False
        if options["sync"]:
            self.sync = True
            logger.warning("Enabling writes - Syncing OpenLDAP with ColdFront")

        self.write_archive = False
        if options["writearchive"]:
            self.write_archive = True

        self.update_description = False
        if options["updatedescription"]:
            self.update_description = True

        self.skip_archived = False
        if options["skiparchived"]:
            self.skip_archived = True

        self.skip_newactive = False
        if options["skipnewactive"]:
            self.skip_newactive = True

        self.filter_group = ""
        if options["projectgroup"]:
            logger.info("Filtering output by project-group: %s", options["projectgroup"])
            self.filter_group = options["projectgroup"]

        self.all = False
        if options["all"]:
            self.all = True
            logger.warning("Syncing ALL OpenLDAP groups with ColdFront")

        if self.filter_group:
            self.sync_check_project(
                self.filter_group,
                self.sync,
                self.write_archive,
                self.update_description,
                self.skip_archived,
                self.skip_newactive,
            )

        if self.all:
            self.loop_all_projects(
                self.sync,
                self.write_archive,
                self.update_description,
                self.skip_archived,
                self.skip_newactive,
            )

        if not self.filter_group and not self.all:
            self.stdout.write("")
            self.stdout.write(
                "No action taken - no option was supplied for a specific project_group in OpenLDAP (-p) or to check all groups in OpenLDAP (-a)"
            )
            self.stdout.write("")
