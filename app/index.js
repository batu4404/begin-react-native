import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import * as flex from './learn/Flex';
import Login from './screens/login/Login';
import Animations from './screens/animations';
import TryFlatList from './screens/list/TryFlatList';
import TryInput from './screens/InputPanel/TryInput';
import Navigations from './screens/navigation';
import RNElement from './screens/RNElement/SimpleHeader';
import Mine from './screens/Mine/Simple';

console.log('mine', Mine);

const AppNavigator = StackNavigator({
    Login: {
        screen: Login,
    },
    Animations: {
        screen: Animations,
    },
    TryFlatList: {
        screen: TryFlatList,
    },
    TryInput: {
        screen: TryInput,
    },
    Navigations: {
        screen: Navigations,
    },
    RNElement: {
        screen: RNElement,
    },
    Mine: {
        screen: Mine,
    },
},
{
    initialRouteName: 'Mine',
    headerMode: 'none',
})

export default class App extends Component {
    renderStatusBar() {
        // return null;
        return (
            <StatusBar
                backgroundColor="red"
                barStyle="light-content"
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <AppNavigator />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
})
