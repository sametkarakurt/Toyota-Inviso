/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './Router';
import {name as appName} from './app.json';
import i18n from "./translations/i18n";


AppRegistry.registerComponent(appName, () => Router);
