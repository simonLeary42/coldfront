import logging
from functools import wraps

from ldap3 import MODIFY_ADD, MODIFY_DELETE, MODIFY_REPLACE, Connection

logger = logging.getLogger(__name__)


def _noop_if_values_nonlist_or_empty(func):
    @wraps(func)
    def wrapper(conn: Connection, dn: str, attribute_name: str, values, controls=None) -> None:
        if isinstance(values, list) and (len(values) == 0):
            func(conn, dn, attribute_name, values, controls=None)
        logger.error(
            "values is a non-list or an empty list, nothing doing...",
            stack_info=True,
            extra={"dn": dn, "attribute_name": attribute_name, "values": values},
        )

    return wrapper


def _noop_if_conn_none(func):
    @wraps(func)
    def wrapper(conn: Connection, *args, **kwargs) -> None:
        if conn is not None:
            func(conn * args, **kwargs)
        logger.error("conn is None, nothing doing...", stack_info=True, extra=dict(args=args, kwargs=kwargs))

    return wrapper


def _log_ldap_errors(func):
    @wraps(func)
    def wrapper(conn: Connection, *args, **kwargs) -> None:
        func(conn, *args, **kwargs)
        if conn.result["result"] != 0:
            logger.error(f"LDAP operation failed! {conn.result}", stack_info=True)

    return wrapper


@_noop_if_values_nonlist_or_empty
@_noop_if_conn_none
@_log_ldap_errors
def add_attribute_values(conn: Connection, dn: str, attribute_name: str, values, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_ADD, values]}, controls=controls)


@_noop_if_values_nonlist_or_empty
@_noop_if_conn_none
@_log_ldap_errors
def overwrite_attribute_values(conn: Connection, dn: str, attribute_name: str, values, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_REPLACE, values]}, controls=controls)


@_noop_if_values_nonlist_or_empty
@_noop_if_conn_none
@_log_ldap_errors
def delete_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_DELETE, values]}, controls=controls)


@_noop_if_conn_none
@_log_ldap_errors
def create_entry(conn: Connection, dn: str, object_class: list, attributes: dict, controls=None) -> None:
    conn.add(dn, object_class=object_class, attributes=attributes, controls=controls)


@_noop_if_conn_none
@_log_ldap_errors
def move_entry(conn: Connection, dn: str, rdn: str, destination_ou_dn: str) -> None:
    conn.modify_dn(dn, rdn, new_superior=destination_ou_dn)


@_noop_if_conn_none
@_log_ldap_errors
def delete_entry(conn: Connection, dn: str, controls=None) -> None:
    conn.delete(dn, controls=controls)
