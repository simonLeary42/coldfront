import logging
from functools import wraps

from ldap3 import MODIFY_ADD, MODIFY_DELETE, MODIFY_REPLACE, Connection
from ldap3.core.exceptions import LDAPException

logger = logging.getLogger(__name__)

"""
wrapper interface for ldap3
ldap3.Connection.modify takes a complex structure containing lists of modifications for many attributes
this simpler interface applies only one modification to one attribute of one entry with each function call
also:
* non-successful LDAP results are logged
* LDAPExceptions are caught, logged, and ultimately surpressed
* conn.result, conn.response are cleared before each operation to ensure freshness
* if conn is None, functions do nothing
"""


def _wrapper(func):
    @wraps(func)
    def wrapper(conn: Connection, *args, **kwargs) -> None:
        extra = dict(args=args, kwargs=kwargs)
        if conn is None:
            logger.error("conn is None!", stack_info=True, extra=extra)
            return
        # because this function may or may not run, it is important that we clean up from the last function
        # this ensures that conn.result was actually created by this function
        conn.result = None
        conn.response = None
        try:
            func(conn, *args, **kwargs)
        except LDAPException:
            logger.exception("LDAP operation caused an exception!", stack_info=True, exc_info=True, extra=extra)
        if conn.result["result"] != 0:
            logger.error(f"LDAP operation failed! {conn.result}", stack_info=True, extra=extra)

    return wrapper


@_wrapper
def add_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_ADD, values]}, controls=controls)


@_wrapper
def overwrite_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_REPLACE, values]}, controls=controls)


@_wrapper
def delete_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_DELETE, values]}, controls=controls)


@_wrapper
def create_entry(conn: Connection, dn: str, object_class: list, attributes: dict, controls=None) -> None:
    conn.add(dn, object_class=object_class, attributes=attributes, controls=controls)


@_wrapper
def move_entry(conn: Connection, dn: str, rdn: str, destination_ou_dn: str, controls=None) -> None:
    conn.modify_dn(dn, rdn, new_superior=destination_ou_dn, controls=controls)


@_wrapper
def delete_entry(conn: Connection, dn: str, controls=None) -> None:
    conn.delete(dn, controls=controls)


@_wrapper
def search(conn: Connection, *args, **kwargs) -> None:
    conn.search(*args, **kwargs)
