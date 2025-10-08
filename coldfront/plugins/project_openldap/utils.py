# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

"""Coldfront project_openldap plugin utils.py"""

import logging
import textwrap

from ldap3 import Connection, Server, Tls

from coldfront.core.utils import ldap
from coldfront.core.utils.common import import_from_settings

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


def _wrapper_ldap_write(func, *args, **kwargs) -> None:
    """
    add a keyword argument `write` which will cause the function to be skipped entirely
    open an LDAP connection, add it as 1st positional argument, run function, then close LDAP connection
    """
    if not kwargs.pop("write", True):
        logger.info("write is false, nothing doing...", stack_info=True, extra=dict(args=args, kwargs=kwargs))
        return None
    with ldap.connection(server, PROJECT_OPENLDAP_BIND_USER, PROJECT_OPENLDAP_BIND_PASSWORD) as conn:
        return func(conn, *args, **kwargs)


def _wrapper_ldap_read(func, *args, **kwargs):
    """open an LDAP connection, add it as 1st positional argument, run function, then close LDAP connection"""
    with ldap.connection(server, PROJECT_OPENLDAP_BIND_USER, PROJECT_OPENLDAP_BIND_PASSWORD) as conn:
        return func(conn, *args, **kwargs)


def openldap_connection(server_opt, bind_user, bind_password):
    """Open connection to OpenLDAP"""
    try:
        connection = Connection(server_opt, bind_user, bind_password, auto_bind=True)
        return connection
    except Exception as e:
        logger.error("Could not connect to OpenLDAP server: %s", e)
        return None


def add_members_to_openldap_project_posixgroup(dn, list_memberuids, write=True):
    """Add members to a posixgroup in OpenLDAP"""
    return _wrapper_ldap_write(ldap.add_attribute_values, dn, "memberUid", list_memberuids, write=write)


def remove_members_from_openldap_project_posixgroup(dn, list_memberuids, write=True):
    """Remove members from a posixgroup in OpenLDAP"""
    return _wrapper_ldap_write(ldap.delete_attribute_values, dn, "memberUid", list_memberuids, write=write)


def add_per_project_ou_to_openldap(project_obj, dn, openldap_ou_description, write=True):
    """Add a per project OU to OpenLDAP - write an OU for a project"""
    return _wrapper_ldap_write(
        ldap.create_entry,
        dn,
        ["top", "organizationalUnit"],
        {"ou": project_obj.project_code, "description": openldap_ou_description},
        write=write,
    )


def add_project_posixgroup_to_openldap(dn, openldap_description, gid_int, write=True):
    """Add a project to OpenLDAP - write a posixGroup"""
    return _wrapper_ldap_write(
        ldap.create_entry, dn, "posixGroup", {"description": openldap_description, "gidNumber": gid_int}, write=write
    )


# Remove a DN - e.g. DELETE a project OU or posixgroup in OpenLDAP
def remove_dn_from_openldap(dn, write=True):
    """Remove a project from OpenLDAP - delete a posixGroup"""
    return _wrapper_ldap_write(ldap.delete_entry, dn, write=write)


# Update the project title in OpenLDAP
def update_project_posixgroup_in_openldap(dn, openldap_description, write=True):
    """Update the description of a posixGroup in OpenLDAP"""
    return _wrapper_ldap_write(ldap.overwrite_attribute_values, dn, "description", openldap_description, write=write)


# MOVE the project to an archive OU - defined as env var
def archive_project_in_openldap(current_dn, relative_dn, archive_ou, write=True):
    """Move a project to the archive OU in OpenLDAP"""
    return _wrapper_ldap_write(ldap.move_entry, current_dn, relative_dn, archive_ou, write=write)


def ldapsearch_check_project_dn(dn):
    """Check a distinguished name exists and represents a project (posixGroup)"""
    return _wrapper_ldap_read(ldap.search, dn, "(objectclass=posixGroup)")


# check bind user can see the Project OU or Archive OU - is also used in system setup check script
def ldapsearch_check_project_ou(OU):
    """Test that ldapsearch can see an OU"""
    return _wrapper_ldap_read(ldap.search, OU, "(objectclass=organizationalUnit)")


def ldapsearch_get_project_memberuids(dn):
    """Get memberUids from a project's posixGroup"""
    return _wrapper_ldap_read(ldap.search, dn, "(objectclass=posixGroup)", attributes=["memberUid"])


def ldapsearch_get_project_description(dn):
    """Get description from a project's posixGroup"""
    return _wrapper_ldap_read(ldap.search, dn, "(objectclass=posixGroup)", attributes=["description"])


"""
    Allocate GID function.
"""


# Provides linear/contiguous GID allocations, using the project object's pk
def allocate_project_openldap_gid(project_pk, PROJECT_OPENLDAP_GID_START):
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


def construct_ou_dn_str(project_obj):
    """Create a distinguished name (dn) for a per project ou"""
    try:
        project_code_str = project_obj.project_code
        dn = f"ou={project_code_str},{PROJECT_OPENLDAP_OU}"
        return dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_ou_archived_dn_str(project_obj):
    """Create a distinguished name (dn) for a per project ou - archived"""
    try:
        project_code_str = project_obj.project_code
        dn = f"ou={project_code_str},{PROJECT_OPENLDAP_ARCHIVE_OU}"
        return dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_dn_str(project_obj):
    """Create a distinguished name (dn) for a project posixgroup in a per project ou, in the projects ou"""
    try:
        project_code_str = project_obj.project_code
        dn = f"cn={project_code_str},ou={project_code_str},{PROJECT_OPENLDAP_OU}"
        return dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_dn_archived_str(project_obj):
    """Create a distinguished name (dn) for a project posixgroup in a per project ou, in the archive ou"""
    try:
        project_code_str = project_obj.project_code
        dn = f"cn={project_code_str},ou={project_code_str},{PROJECT_OPENLDAP_ARCHIVE_OU}"
        return dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_per_project_ou_relative_dn_str(project_obj):
    """Create a relative distinguished name (rdn) for a project ou - required when moving this object to a new superior e.g. archive ou"""
    try:
        project_code_str = project_obj.project_code
        relative_dn = f"ou={project_code_str}"
        return relative_dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_project_ou_description(project_obj):
    """Create a description for a per project OU"""
    try:
        project_code_str = project_obj.project_code
        description = f"OU for project {project_code_str}"
        return description
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_project_posixgroup_description(project_obj):
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
