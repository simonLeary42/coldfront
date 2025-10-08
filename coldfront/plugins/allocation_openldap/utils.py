# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

"""Coldfront allocation_openldap plugin utils.py"""

import logging
from contextlib import contextmanager

from ldap3 import ALL, Connection, Server, Tls

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

ALLOCATION_OPENLDAP_DESCRIPTION_TITLE_LENGTH = import_from_settings("PROJECT_OPENLDAP_DESCRIPTION_TITLE_LENGTH")

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

# add_members_to_openldap_posixgroup
# add_per_project_ou_to_openldap
# add_posixgroup_to_openldap
# move_dn_in_openldap
# openldap_connection
# remove_dn_from_openldap
# remove_members_from_openldap_posixgroup
# update_posixgroup_description_in_openldap
# ldapsearch_check_project_dn
# ldapsearch_check_ou
# ldapsearch_get_posixgroup_memberuids
# ldapsearch_get_description


@contextmanager
def _ldap_connection():
    """
    Context manager to create and destroy an LDAP connection.

    :param server_uri: URI of the LDAP server, e.g., 'ldap://localhost'
    :param user_dn: Distinguished Name (DN) of the user to bind as
    :param password: Password for the user
    :param auto_bind: Whether to auto-bind upon connection creation
    """
    server = Server(server_uri, get_info=ALL)
    conn = Connection(server, user=user_dn, password=password, auto_bind=auto_bind)
    try:
        yield conn
    finally:
        conn.unbind()


@contextmanager
def openldap_connection(server_uri, use_ssl, connect_timeout, tls, bind_user, bind_password):
    server = Server(server_uri, use_ssl=use_ssl, connect_timeout=connect_timeout, tls=tls)
    try:
        connection = Connection(server, user=bind_user, password=bind_password, auto_bind=True)
        yield connection
    except Exception as e:
        logger.error("Could not connect to OpenLDAP server: %s", e)
        yield None
    finally:
        if "connection" in locals() and connection.bound:
            connection.unbind()


# Provides linear/contiguous GID allocations, using the project object's pk
def allocate_allocation_openldap_gid(project_pk, PROJECT_OPENLDAP_GID_START):
    """Create a GID for use as gidNumber in the project's posixGroup"""
    # add the GID start
    project_pkid_int = int(project_pk)
    gid_int = project_pkid_int + PROJECT_OPENLDAP_GID_START

    # example result 8000+PK if starting at 8000
    allocated_project_openldap_gid = int(gid_int)

    return allocated_project_openldap_gid


def construct_dn_str(allocation_obj):
    """Create a distinguished name (dn) for a project posixgroup in a per project ou, in the projects ou"""
    try:
        project_code_str = allocation_obj.project_code
        dn = f"cn={project_code_str},ou={project_code_str},{PROJECT_OPENLDAP_OU}"
        return dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_relative_dn_str(allocation_obj):
    """Create a relative distinguished name (rdn) for an allocation posixgroup - required when moving this object to a new superior"""
    try:
        project_code_str = allocation_obj.project_code
        relative_dn = f"ou={project_code_str}"
        return relative_dn
    except Exception as exc_log:
        logger.info(exc_log)
        return None


def construct_description(allocation_obj):
    """Create a description for an allocation posixgroup"""
    try:
        project_code_str = allocation_obj.project_code
        description = f"OU for project {project_code_str}"
        return description
    except Exception as exc_log:
        logger.info(exc_log)
        return None
