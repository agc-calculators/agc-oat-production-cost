
// AgcOatProductionCost: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-oat-production-cost.core.js';
import {
  AgcOatProductionCost,
  AgcOatProductionCostInputs,
  AgcOatProductionCostProgress,
  AgcOatProductionCostResults,
  AgcOatProductionCostResultsPlaceholder
} from './agc-oat-production-cost.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcOatProductionCost,
    AgcOatProductionCostInputs,
    AgcOatProductionCostProgress,
    AgcOatProductionCostResults,
    AgcOatProductionCostResultsPlaceholder
  ], opts);
}
