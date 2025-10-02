# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

"""Coldfront allocation_openldap plugin utils.py"""

import logging
import textwrap

from ldap3 import MODIFY_ADD, MODIFY_DELETE, MODIFY_REPLACE, Connection, Server, Tls

from coldfront.core.utils.common import import_from_settings
from coldfront.plugins.project_openldap.utils import (
    openldap_connection,
    add_members_to_openldap_posixgroup,
)

PROJECT_OPENLDAP_BIND_USER = import_from_settings("PROJECT_OPENLDAP_BIND_USER")
PROJECT_OPENLDAP_BIND_PASSWORD = import_from_settings("PROJECT_OPENLDAP_BIND_PASSWORD")
PROJECT_OPENLDAP_SERVER_URI = import_from_settings("PROJECT_OPENLDAP_SERVER_URI")

PROJECT_OPENLDAP_OU = import_from_settings("PROJECT_OPENLDAP_OU")

PROJECT_OPENLDAP_CONNECT_TIMEOUT = import_from_settings("PROJECT_OPENLDAP_CONNECT_TIMEOUT")
PROJECT_OPENLDAP_USE_SSL = import_from_settings("PROJECT_OPENLDAP_USE_SSL")
PROJECT_OPENLDAP_USE_TLS = import_from_settings("PROJECT_OPENLDAP_USE_TLS")
PROJECT_OPENLDAP_PRIV_KEY_FILE = import_from_settings("PROJECT_OPENLDAP_PRIV_KEY_FILE")
PROJECT_OPENLDAP_CERT_FILE = import_from_settings("PROJECT_OPENLDAP_CERT_FILE")
PROJECT_OPENLDAP_CACERT_FILE = import_from_settings("PROJECT_OPENLDAP_CACERT_FILE")
PROJECT_OPENLDAP_ARCHIVE_OU = import_from_settings("PROJECT_OPENLDAP_ARCHIVE_OU")

PROJECT_OPENLDAP_DESCRIPTION_TITLE_LENGTH = import_from_settings("PROJECT_OPENLDAP_DESCRIPTION_TITLE_LENGTH")

# provide a sensible default locally to stop the openldap description being too long
MAX_OPENLDAP_DESCRIPTION_LENGTH = 250

# Note: SASL not provided currently

tls = None
if PROJECT_OPENLDAP_USE_TLS:
    tls = Tls(
        local_private_key_file=PROJECT_OPENLDAP_PRIV_KEY_FILE,
        local_certificate_file=PROJECT_OPENLDAP_CERT_FILE,
        ca_certs_file=PROJECT_OPENLDAP_CACERT_FILE,
    )


server = Server(
    PROJECT_OPENLDAP_SERVER_URI,
    use_ssl=PROJECT_OPENLDAP_USE_SSL,
    connect_timeout=PROJECT_OPENLDAP_CONNECT_TIMEOUT,
    tls=tls,
)
logger = logging.getLogger(__name__)

# Provides linear/contiguous GID allocations, using the project object's pk
def allocate_allocation_openldap_gid(project_pk, PROJECT_OPENLDAP_GID_START):
    """Create a GID for use as gidNumber in the project's posixGroup"""
    # add the GID start
    project_pkid_int = int(project_pk)
    gid_int = project_pkid_int + PROJECT_OPENLDAP_GID_START

    # example result 8000+PK if starting at 8000
    allocated_project_openldap_gid = int(gid_int)

    return allocated_project_openldap_gid


"""
    Construction functions.
"""


def construct_dn_str(project_obj):
    """Create a distinguished name (dn) for a project posixgroup in a per project ou, in the projects ou"""
    try:
        project_code_str = project_obj.project_code
        dn = f"cn={project_code_str},ou={project_code_str},{PROJECT_OPENLDAP_OU}"
        return dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None

def construct_project_allocation_description(project_obj):
    """Create a description for a project's posixGroup"""
    try:
        pi = project_obj.pi

        # if title is too long shorten
        if len(project_obj.title) > PROJECT_OPENLDAP_DESCRIPTION_TITLE_LENGTH:
            truncated_title = textwrap.shorten(
                project_obj.title,
                PROJECT_OPENLDAP_DESCRIPTION_TITLE_LENGTH,
                placeholder="...",
            )
            title = truncated_title
        else:
            title = project_obj.title

        description = ""

        # if institution feature activated use in OpenLDAP description
        if hasattr(project_obj, "institution"):
            institution = project_obj.institution
            # set to NotDefined if empty
            if project_obj.institution in [None, ""]:
                institution = "NotDefined"
            # setup description with institution var
            description = f"INSTITUTE: {institution} | PI: {pi} | TITLE: {title}"
        else:
            # setup description without institution var
            description = f"PI: {pi} | TITLE: {title}"

        # also deal with the combined  description field, if it gets too long
        if len(description) > MAX_OPENLDAP_DESCRIPTION_LENGTH:
            truncated_description = textwrap.shorten(description, MAX_OPENLDAP_DESCRIPTION_LENGTH, placeholder="...")
            description = truncated_description

        return description
    except Exception as exc_log:
        logger.info(exc_log)
        return None
