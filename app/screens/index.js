// export {default as SimpleLogin} from './login/SimpleLogin.js';
import {Navigation} from 'react-native-navigation';

import SimpleLoginScreen from './login/SimpleLoginScreen';
import LearnScreen from './learn/LearnScreen';
import FlexScreen from '../learn/Flex';
import TouchablesScreen from '../learn/Touchables';

export function registerScreens() {
    Navigation.registerComponent('tuts.SimpleLoginScreen', () => SimpleLoginScreen);
    Navigation.registerComponent('tuts.LearnScreen', () => LearnScreen);
    Navigation.registerComponent('tuts.FlexScreen', () => FlexScreen);
    Navigation.registerComponent('tuts.TouchablesScreen', () => TouchablesScreen);
}