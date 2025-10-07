# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

import logging
import warnings

from django.core.management.base import BaseCommand
from ldap3.core.exceptions import LDAPException

from coldfront.core.utils.common import import_from_settings
from coldfront.plugins.project_openldap.utils import (
    PROJECT_OPENLDAP_BIND_USER,
    ldapsearch_check_project_ou,
)

# from coldfront.plugins.project_openldap.utils import

""" Coldfront allocation_openldap plugin - django management command -  allocation_openldap_check_setup.py """


class Command(BaseCommand):
    help = "Check settings for allocation_openldap plugin"

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
        parser.add_argument(
            "-l", "--ldapsearch", help="Check search to OpenLDAP", action="store_true"
        )

    def check_env_var_existence(self, name, expected_value, required=True):
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))
        self.stdout.write(
            self.style.SUCCESS(f"Checking pre-requisite environment variable {name}...")
        )
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))

        try:
            env_var = import_from_settings(name, expected_value)

            if not env_var and not required:
                self.stdout.write(
                    self.style.NOTICE(f"[OPTIONAL] {name} is not set (using default)")
                )
                return None
            if not env_var and required:
                self.stdout.write(
                    self.style.WARNING(
                        f"[REQUIRED] WARNING - {name} is not set or 0 length in settings!"
                    )
                )
                return None
            status = "[REQUIRED]" if required else "[OPTIONAL]"
            self.stdout.write(
                self.style.SUCCESS(
                    f"{status} OK - {name} is {env_var if 'PASSWORD' not in name else 'set'}"
                )
            )
        except ImportError:
            warnings.warn(f"Failed to import {name}", ImportWarning)

    def check_all_openldap_options_enabled(self):
        self.stdout.write("")
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))
        self.stdout.write(
            self.style.SUCCESS(
                "Check if all of required Project OpenLDAP imports are loaded in the configuration file"
            )
        )
        self.stdout.write(self.style.SUCCESS("---------------------------------------------------"))
        self.stdout.write("")

        required_vars = {
            "PROJECT_CODE": True,  # pre-req
            "PROJECT_CODE_PADDING": True,  # pre-req
            "PLUGIN_PROJECT_OPENLDAP": True,  # to-enable-plugin
            "PROJECT_OPENLDAP_GID_START": True,
            "PROJECT_OPENLDAP_SERVER_URI": True,
            "PROJECT_OPENLDAP_OU": True,
            "PROJECT_OPENLDAP_BIND_USER": True,
            "PROJECT_OPENLDAP_BIND_PASSWORD": True,
            "PROJECT_OPENLDAP_REMOVE_PROJECT": True,
            "PROJECT_OPENLDAP_DESCRIPTION_TITLE_LENGTH": True,
        }

        optional_vars = {
            "PROJECT_OPENLDAP_ARCHIVE_OU": None,
            "PROJECT_OPENLDAP_CONNECT_TIMEOUT": True,
            "PROJECT_OPENLDAP_USE_SSL": True,
            "PROJECT_OPENLDAP_USE_TLS": False,
            "PROJECT_OPENLDAP_PRIV_KEY_FILE": None,
            "PROJECT_OPENLDAP_CERT_FILE": None,
            "PROJECT_OPENLDAP_CACERT_FILE": None,
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
            self.stdout.write(
                self.style.SUCCESS(f" {PROJECT_OPENLDAP_OU} is set to {PROJECT_OPENLDAP_OU}")
            )
            self.stdout.write(self.style.SUCCESS(" ldapsearch..."))
            try:
                ldapsearch_check_project_ou_result = ldapsearch_check_project_ou(
                    PROJECT_OPENLDAP_OU
                )
                if ldapsearch_check_project_ou_result and not isinstance(
                    ldapsearch_check_project_ou_result, Exception
                ):
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

        # Perform the search
        if PROJECT_OPENLDAP_ARCHIVE_OU:
            self.stdout.write(self.style.SUCCESS(" LDAP ARCHIVE SEARCH"))
            self.stdout.write(
                self.style.SUCCESS(
                    f"{PROJECT_OPENLDAP_ARCHIVE_OU} is set to {PROJECT_OPENLDAP_ARCHIVE_OU}"
                )
            )
            self.stdout.write(self.style.SUCCESS(" ldapsearch..."))
            try:
                ldapsearch_check_project_ou_result = ldapsearch_check_project_ou(
                    PROJECT_OPENLDAP_ARCHIVE_OU
                )
                if ldapsearch_check_project_ou_result and not isinstance(
                    ldapsearch_check_project_ou_result, Exception
                ):
                    self.stdout.write(
                        self.style.SUCCESS(
                            f"SUCCESS ldapsearch can find {PROJECT_OPENLDAP_ARCHIVE_OU}: {ldapsearch_check_project_ou_result} using bind user {PROJECT_OPENLDAP_BIND_USER}"
                        )
                    )
                else:
                    self.stdout.write(
                        self.style.WARNING(
                            f"FAILURE ldapsearch CANT find {PROJECT_OPENLDAP_ARCHIVE_OU}: {ldapsearch_check_project_ou_result} using bind user {PROJECT_OPENLDAP_BIND_USER}"
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

        self.all = False
        if options["all"]:
            self.all = True
            self.imports = True
            self.ldapsearch = True
            self.check_all_openldap_options_enabled()
            self.check_setup_ldapsearch()

        self.imports = False
        if options["imports"]:
            self.imports = True
            self.check_all_openldap_options_enabled()

        self.ldapsearch = False
        if options["ldapsearch"]:
            self.ldapsearch = True
            self.check_setup_ldapsearch()

        if (not self.all) and (not self.imports) and (not self.ldapsearch):
            self.stdout.write(
                self.style.NOTICE(
                    "No action taken - no option was supplied -i (--imports), -l (ldapsearch) or -a (--all)"
                )
            )
