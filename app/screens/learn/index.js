import {Navigation} from 'react-native-navigation';

import FlexScreen from '../../learn/Flex';
import TouchablesScreen from '../../learn/Touchables';
import {registerScreens} from '../index.js';

// export function registerScreens() {
//     Navigation.registerComponent('tuts.FlexScreen', () => FlexScreen);
//     Navigation.registerComponent('tuts.TouchablesScreen', () => TouchablesScreen);
// }

registerScreens();

Navigation.startTabBasedApp({
    tabs: [
        {
            lablel: 'Flex',
            screen: 'tuts.FlexScreen',
            title: 'Flex',
            icon: require('../../resources/img/plane.png'),
        },
        {
            lablel: 'Touchables',
            screen: 'tuts.TouchablesScreen',
            title: 'Touchables',
            icon: require('../../resources/img/plane.png'),
        }
    ]
});