from functools import wraps

from ldap3 import MODIFY_ADD, MODIFY_DELETE, MODIFY_REPLACE, Connection
from ldap3.core.exceptions import LDAPException
from ldap3.protocol.rfc4511 import LDAPResult

# from ldap3 import MODIFY_ADD, MODIFY_DELETE, MODIFY_REPLACE, Connection, Server, Tls

# openldap_connection
# add_members_to_openldap_posixgroup
# remove_members_from_openldap_posixgroup
# add_per_project_ou_to_openldap
# add_posixgroup_to_openldap
# remove_dn_from_openldap
# update_posixgroup_description_in_openldap
# move_dn_in_openldap
# ldapsearch_check_project_dn
# ldapsearch_check_ou
# ldapsearch_get_posixgroup_memberuids
# ldapsearch_get_description
# allocate_project_openldap_gid
# construct_ou_dn_str
# construct_ou_archived_dn_str
# construct_dn_str
# construct_dn_archived_str
# construct_per_project_ou_relative_dn_str
# construct_project_ou_description
# construct_project_posixgroup_description


def _ensure_ldap_success(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        if result.get("result") != 0:
            raise LDAPException(result)
        return result

    return wrapper


def _ensure_nonempty_list(x, name):
    if not isinstance(x, list):
        raise TypeError(f"{name} must be a list!")
    if len(x) == 0:
        raise ValueError(f"{name} cannot be empty!")


@_ensure_ldap_success
def add_attribute_values(conn: Connection, dn: str, attribute_name: str, values, controls=None) -> LDAPResult:
    """multi-valued attributes only"""
    _ensure_nonempty_list(values, "values")
    conn.modify(dn, {attribute_name: [MODIFY_ADD, values]}, controls=controls)
    return conn.result


@_ensure_ldap_success
def overwrite_attribute_values(conn: Connection, dn: str, attribute_name: str, values, controls=None) -> LDAPResult:
    """multi-valued attributes only"""
    _ensure_nonempty_list(values, "values")
    conn.modify(dn, {attribute_name: [MODIFY_REPLACE, values]}, controls=controls)
    return conn.result


@_ensure_ldap_success
def delete_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> LDAPResult:
    """multi-valued attributes only"""
    _ensure_nonempty_list(values, "values")
    conn.modify(dn, {attribute_name: [MODIFY_DELETE, values]}, controls=controls)
    return conn.result


@_ensure_ldap_success
def move_entry(conn: Connection, dn: str, rdn: str, destination_ou_dn: str) -> LDAPResult:
    conn.modify_dn(dn, rdn, new_superior=destination_ou_dn)
    return conn.result


@_ensure_ldap_success
def delete_entry(conn: Connection, dn: str, controls=None) -> LDAPResult:
    conn.delete(dn, controls=controls)
    return conn.result
