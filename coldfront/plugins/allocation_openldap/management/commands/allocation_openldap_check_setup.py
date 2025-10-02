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
from coldfront.plugins.project_openldap.management.commands.project_openldap_check_setup import (
    Command as ProjectOpenLDAPCommand
)
# from coldfront.plugins.project_openldap.utils import

""" Coldfront allocation_openldap plugin - django management command -  allocation_openldap_check_setup.py """


class Command(ProjectOpenLDAPCommand):
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
