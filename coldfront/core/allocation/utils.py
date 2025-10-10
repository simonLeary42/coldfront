# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

from django.db.models import Q

from coldfront.core.allocation.models import AllocationUser, AllocationUserStatusChoice
from coldfront.core.resource.models import Resource


def set_allocation_user_status_to_error(allocation_user_pk):
    allocation_user_obj = AllocationUser.objects.get(pk=allocation_user_pk)
    error_status = AllocationUserStatusChoice.objects.get(name="Error")
    allocation_user_obj.status = error_status
    allocation_user_obj.save()


def generate_guauge_data_from_usage(name, value, usage):
    label = "%s: %.2f of %.2f" % (name, usage, value)

    try:
        percent = (usage / value) * 100
    except ZeroDivisionError:
        percent = 100
    except ValueError:
        percent = 100

    if percent < 80:
        color = "#6da04b"
    elif percent >= 80 and percent < 90:
        color = "#ffc72c"
    else:
        color = "#e56a54"

    usage_data = {
        "columns": [
            [label, percent],
        ],
        "type": "gauge",
        "colors": {label: color},
    }

    return usage_data


def get_user_resources(user_obj):
    if user_obj.is_superuser:
        resources = Resource.objects.filter(is_allocatable=True)
    else:
        resources = Resource.objects.filter(
            Q(is_allocatable=True)
            & Q(is_available=True)
            & (
                Q(is_public=True)
                | Q(allowed_groups__in=user_obj.groups.all())
                | Q(
                    allowed_users__in=[
                        user_obj,
                    ]
                )
            )
        ).distinct()

    return resources


def generate_allocation_code(allocation_code: str, allocation_pk: int, padding: int = 0) -> str:
    """
    Generate a formatted allocation code by combining an uppercased user-defined allocation code,
    allocation primary key and requested padding value (default = 0).

    :param allocation_code: The base allocation code, set through the ALLOCATION_CODE configuration variable.
    :param allocation_pk: The primary key of the allocation.
    :param padding: The number of digits to pad the primary key with, set through the ALLOCATION_CODE_PADDING configuration variable.
    :return: A formatted allocation code string.
    """

    return f"{allocation_code.upper()}{str(allocation_pk).zfill(padding)}"


def test_allocation_function(allocation_pk):
    print("test_allocation_function", allocation_pk)
