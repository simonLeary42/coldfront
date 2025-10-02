# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

import logging
import warnings

from ldap3.core.exceptions import LDAPException

from coldfront.core.utils.common import import_from_settings
from coldfront.plugins.project_openldap.utils import (
    PROJECT_OPENLDAP_BIND_USER,
    ldapsearch_check_ou,
)

from coldfront.plugins.project_openldap.management.commands.project_openldap_check_setup import (
    Command as ProjectOpenLDAPCommand,
)

""" Coldfront project_openldap plugin - django management command -  project_openldap_check_setup.py """

# Example pre-reqs - we require project_code
# --------------------------------------
# i. (required) PROJECT_CODE="CDF"
# ii. (required) PROJECT_CODE_PADDING=4
# --------------------------------------
# See plugin directory README.md for explanation of project_openldap plugin variables
# --------------------------------------

# advise that gids are at least > 1000
LOCAL_GID_ADVISED_LOWER_LIMIT = 1000
# advise that title lengths should be > 10 and < 300
LOCAL_DESCRIPTION_TITLE_LENGTH_LOWER_LIMIT = 10
LOCAL_DESCRIPTION_TITLE_LENGTH_UPPER_LIMIT = 300


class Command(ProjectOpenLDAPCommand):
    help = "Check settings for project_openldap plugin"

    def add_arguments(self, parser):
        parser.add_argument(
            "-a",
            "--all",
            help="Check both imports and ldapsearch work",
            action="store_true",
        )
        parser.add_argument(
            "-i",
            "--imports",
            help="Check all imports for the plugin",
            action="store_true",
        )
        parser.add_argument("-l", "--ldapsearch", help="Check search to OpenLDAP", action="store_true")

    def check_all_openldap_options_enabled(self):
        super().check_all_openldap_options_enabled()  # require project_openldap is setup first
        self.stdout.write("")
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))
        self.stdout.write(
            self.style.SUCCESS("Check if all of required Project OpenLDAP imports are loaded in the configuration file")
        )
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))
        self.stdout.write("")

        required_vars = {
            "PLUGIN_ALLOCATION_OPENLDAP": True,  # to-enable-plugin
        }

        optional_vars = {
            "ALLOCATION_OPENLDAP_ARCHIVE_OU": None,
        }

        # Check required vars
        for key, value in required_vars.items():
            self.check_env_var_existence(key, value, required=True)

        # Check optional vars
        for key, value in optional_vars.items():
            self.check_env_var_existence(key, value, required=False)

    def check_setup_ldapsearch(self):
        self.stdout.write("")
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))
        self.stdout.write(self.style.SUCCESS(" Test ldapsearch"))
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))
        self.stdout.write("")

        # 1. Search for the REQUIRED project OU
        # 2. Check and search for the OPTIONAL archive_project OU

        PROJECT_OPENLDAP_OU = import_from_settings("PROJECT_OPENLDAP_OU", True)
        PROJECT_OPENLDAP_ARCHIVE_OU = import_from_settings("PROJECT_OPENLDAP_ARCHIVE_OU", True)

        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))

        if PROJECT_OPENLDAP_OU:
            self.stdout.write(self.style.SUCCESS(" LDAP SEARCH"))
            self.stdout.write(self.style.SUCCESS(f" {PROJECT_OPENLDAP_OU} is set to {PROJECT_OPENLDAP_OU}"))
            self.stdout.write(self.style.SUCCESS(" ldapsearch..."))
            try:
                ldapsearch_check_project_ou_result = ldapsearch_check_ou(PROJECT_OPENLDAP_OU)
                if ldapsearch_check_project_ou_result and not isinstance(ldapsearch_check_project_ou_result, Exception):
                    self.stdout.write(
                        self.style.SUCCESS(
                            f"SUCCESS ldapsearch can find {PROJECT_OPENLDAP_OU}: {ldapsearch_check_project_ou_result} using bind user {PROJECT_OPENLDAP_BIND_USER}"
                        )
                    )
                else:
                    self.stdout.write(
                        self.style.WARNING(
                            f"FAILURE ldapsearch CANT find {PROJECT_OPENLDAP_OU}: {ldapsearch_check_project_ou_result} using bind user {PROJECT_OPENLDAP_BIND_USER}"
                        )
                    )
            except LDAPException:
                self.stdout.write(self.style.WARNING(f"ERROR WITH LDAPSEARCH: {LDAPException}"))

        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))

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

        if options["all"]:
            options["imports"] = True
            options["ldapsearch"] = True
        action_taken = False
        if options["imports"]:
            self.check_all_openldap_options_enabled()
            action_taken = True
        if options["ldapsearch"]:
            self.check_setup_ldapsearch()
            action_taken = True
        if not action_taken:
            self.stdout.write(
                self.style.NOTICE(
                    "No action taken - no option was supplied -i (--imports), -l (ldapsearch) or -a (--all)"
                )
            )
