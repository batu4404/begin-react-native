import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import SimpleLoginScreen from '../screens/login/SimpleLogin';
import LearnScreen from '../screens/LearnScreen';
import ChatScreen from '../screens/chat/ChatScreen';

const RootNavigator = StackNavigator({
    Login: {
        screen: SimpleLoginScreen,
    },
    LearnScreen: {
        screen: LearnScreen
    }
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
})


class AppRoot extends Component {
    render() {
        return (
            <RootNavigator />
        )
    }
} 

export default AppRoot;