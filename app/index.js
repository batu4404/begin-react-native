import React, {Component} from 'react';
import * as flex from './learn/Flex';
import {StackNavigator} from 'react-navigation';
import SimpleLogin from './screens/login/SimpleLogin';
import YoutubeLike from './screens/google/YoutubeLike';
import HKBT from './screens/HKBT/Test';

// const RootNavigator = StackNavigator({
//     Login: {screen: SimpleLogin},
//     YoutubeLike: {screen: YoutubeLike},
//     HKBT: {screen: HKBT}, 
// }, {
//     initialRouteName: 'HKBT',
//     headerMode: 'none'
// })
 
export default class App extends Component {
    render() {
        return (
            <HKBT />
        )
    } 
}