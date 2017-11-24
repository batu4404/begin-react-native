import React, {Component} from 'react';
import * as flex from './learn/Flex';
import {StackNavigator} from 'react-navigation';
import SimpleLogin from './screens/login/SimpleLogin';
import YoutubeLike from './screens/google/YoutubeLike';

const RootNavigator = StackNavigator({
    Login: {screen: SimpleLogin},
    YoutubeLike: {screen: YoutubeLike}
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
})
 
export default class App extends Component {
    render() {
        return (
            <RootNavigator />
        )
    } 
}