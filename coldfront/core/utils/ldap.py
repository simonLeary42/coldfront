import logging
from contextlib import contextmanager
from functools import wraps

from ldap3 import MODIFY_ADD, MODIFY_DELETE, MODIFY_REPLACE, Connection, Server
from ldap3.core.exceptions import LDAPException

"""
wrapper interface for ldap3
ldap3.Connection.modify takes a complex structure containing lists of modifications for many attributes
this simpler interface applies only one modification to one attribute of one entry with each function call
also:
* a context manager is provided to open and close the LDAP connection
* non-successful LDAP results are logged
* LDAPExceptions are caught, logged, and ultimately surpressed
* conn.result, conn.response are cleared before each operation to ensure freshness
* if conn is None, writing functions do nothing, reading functions throw a TypeError

example usage:
```
server = ldap3.Server(...)
with connection(server, ...) as conn:
    overwrite_attribute_values(conn, ...)
```
"""

logger = logging.getLogger(__name__)

_READ = 0
_WRITE = 1


@contextmanager
def connection(server: Server, bind_dn: str, bind_password: str):
    conn = Connection(server, user=bind_dn, password=bind_password, auto_bind=True)
    try:
        yield conn
    finally:
        conn.unbind()


# decorators are weird: https://stackoverflow.com/questions/5929107/decorators-with-parameters
def _wrapper(mode):
    def _wrapper2(func):
        @wraps(func)
        def _wrapper3(conn: Connection, *args, **kwargs) -> None:
            extra = dict(args=args, kwargs=kwargs)
            if conn is None:
                logger.error("conn is None!", stack_info=True, extra=extra)
                if mode == _READ:
                    raise TypeError("connection is None!")
                elif mode == _WRITE:
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

        return _wrapper3

    return _wrapper2


@_wrapper(_WRITE)
def add_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_ADD, values]}, controls=controls)


@_wrapper(_WRITE)
def overwrite_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_REPLACE, values]}, controls=controls)


@_wrapper(_WRITE)
def delete_attribute_values(conn: Connection, dn: str, attribute_name: str, values: list, controls=None) -> None:
    conn.modify(dn, {attribute_name: [MODIFY_DELETE, values]}, controls=controls)


@_wrapper(_WRITE)
def create_entry(conn: Connection, dn: str, object_class: list, attributes: dict, controls=None) -> None:
    conn.add(dn, object_class=object_class, attributes=attributes, controls=controls)


@_wrapper(_WRITE)
def move_entry(conn: Connection, dn: str, rdn: str, destination_ou_dn: str, controls=None) -> None:
    conn.modify_dn(dn, rdn, new_superior=destination_ou_dn, controls=controls)


@_wrapper(_WRITE)
def delete_entry(conn: Connection, dn: str, controls=None) -> None:
    conn.delete(dn, controls=controls)


@_wrapper(_READ)
def search(conn: Connection, *args, **kwargs) -> None:
    conn.search(*args, **kwargs)
