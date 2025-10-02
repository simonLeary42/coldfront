# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

from coldfront.config.base import INSTALLED_APPS
from coldfront.config.env import ENV

INSTALLED_APPS += ["coldfront.plugins.project_openldap"]

# where allocation gid numbering will start, no default value provided here on purpose, site should define sensible value
ALLOCATION_OPENLDAP_GID_START = ENV.int("ALLOCATION_OPENLDAP_GID_START")
