// SPDX-FileCopyrightText: (C) ColdFront Authors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { initPubChart } from './publicationChart';
import { initGrantChart } from './grantChart';
import { initAllocationChart } from './allocationChart';
import { initResourceChart } from './resourceChart';
import { initGaugeChart } from './gaugeChart';

export function initCharts(): void {
  for (const func of [
    initPubChart,
    initGrantChart,
    initAllocationChart,
    initResourceChart,
    initGaugeChart,
  ]) {
    func();
  }
}
