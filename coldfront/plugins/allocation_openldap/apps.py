# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

"""Coldfront allocation_openldap plugin apps.py"""

import importlib

from django.apps import AppConfig


class AllocationOpenldapConfig(AppConfig):
    name = "coldfront.plugins.allocation_openldap"

    def ready(self):
        importlib.import_module("coldfront.plugins.allocation_openldap.signals")
