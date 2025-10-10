# SPDX-FileCopyrightText: (C) ColdFront Authors
#
# SPDX-License-Identifier: AGPL-3.0-or-later

from django.core.management.base import BaseCommand

from coldfront.core.allocation.models import Allocation
from coldfront.core.allocation.utils import generate_allocation_code
from coldfront.core.utils.common import import_from_settings

ALLOCATION_CODE = import_from_settings("ALLOCATION_CODE", False)
ALLOCATION_CODE_PADDING = import_from_settings("ALLOCATION_CODE_PADDING", False)


class Command(BaseCommand):
    help = "Update existing allocations with allocation codes."

    def add_arguments(self, parser):
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Outputting allocation primary keys and titled, followed by their updated allocation code",
        )

    def update_allocation_code(self, allocations):
        user_input = input(
            "Assign all existing allocations with allocation codes? You can use the --dry-run flag to preview changes first. [y/N] "
        )

        try:
            if user_input == "y" or user_input == "Y":
                for allocation in allocations:
                    allocation.allocation_code = generate_allocation_code(
                        ALLOCATION_CODE, allocation.pk, ALLOCATION_CODE_PADDING
                    )
                    allocation.save(update_fields=["allocation_code"])
                self.stdout.write(f"Updated {allocations.count()} allocations with allocation codes")
            else:
                self.stdout.write("No changes made")
        except AttributeError:
            self.stdout.write(
                "Error, no changes made. Please set ALLOCATION_CODE as a string value inside configuration file."
            )

    def allocation_code_dry_run(self, allocations):
        try:
            for allocation in allocations:
                new_code = generate_allocation_code(ALLOCATION_CODE, allocation.pk, ALLOCATION_CODE_PADDING)
                self.stdout.write(
                    f"Allocation {allocation.pk}, called {allocation.title}: new allocation_code would be '{new_code}'"
                )
        except AttributeError:
            self.stdout.write(
                "Error, no changes made. Please set ALLOCATION_CODE as a string value inside configuration file."
            )

    def handle(self, *args, **options):
        dry_run = options["dry_run"]
        allocations_without_codes = Allocation.objects.filter(allocation_code="")

        if dry_run:
            self.allocation_code_dry_run(allocations_without_codes)
        else:
            self.update_allocation_code(allocations_without_codes)
