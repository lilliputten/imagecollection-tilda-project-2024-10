/** @desc Re-export parsed and typed scss variables */

import * as cssVariables from './variables-export.scss';

// See pre-exports in `variables-export.scss`
export interface TVariables {
  blockNavHeader: string;

  smallTreshold: string;
  smallTresholdPx: number;
  mobileTreshold: string;
  mobileTresholdPx: number;
  wideTreshold: string;
  wideTresholdPx: number;
}

const vars = cssVariables as TVariables;

const {
  // prettier-ignore
  blockNavHeader,

  smallTreshold,
  mobileTreshold,
  wideTreshold,
} = vars;

const smallTresholdPx = parseInt(smallTreshold);
const mobileTresholdPx = parseInt(mobileTreshold);
const wideTresholdPx = parseInt(wideTreshold);

export {
  // Block ids...
  blockNavHeader,

  // Tresholds as is...
  smallTreshold,
  mobileTreshold,
  wideTreshold,

  // Tresholds as numbers...
  smallTresholdPx,
  mobileTresholdPx,
  wideTresholdPx,
};
