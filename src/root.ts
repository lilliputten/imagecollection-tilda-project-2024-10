/** @module Scripts root module
 *  @since 2024.10.23, 16:41
 *  @changed 2024.10.25, 20:45
 */

import './app-info.scss';
import './variables/variables-expose.scss';

import './misc-styles';

/* // DEBUG: Example of usage of css exported variables
 * import {
 *   wideTresholdPx, // 1200
 * } from './variables';
 * console.log('XXX', wideTresholdPx);
 * debugger;
 */

import { initTopMenu } from './TopMenu';
import { initFeaturesGal } from './FeaturesGal';
import { initCatalogGal } from './CatalogGal';
import { initMethodsGal } from './MethodsGal';
import { initCaseTiles } from './CaseTiles';
import { isDev } from './core/constants/isDev';
import { isDebug } from './core/constants/isDebug';

/** Print app info */
function printAppInfo() {
  const appVersion = process.env.APP_VERSION;
  // const isDebug = process.env.DEBUG;
  // const isDev = process.env.DEV;
  // eslint-disable-next-line no-console
  const consoleMethod = isDebug || isDev ? console.warn : console.log;
  consoleMethod.call(console, appVersion);
}

/** Init all the page */
function initPage() {
  // Start subcomponents...
  initTopMenu();
  initFeaturesGal();
  initCatalogGal();
  initMethodsGal();
  initCaseTiles();
}

printAppInfo();

window.addEventListener('load', initPage);
