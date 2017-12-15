import React, { Component } from 'react';
import { Platform, View, StyleSheet, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/screens/Login/Login';
import Animations from './app/screens/animations';

const AppNavigator = StackNavigator({
    Login: {
        screen: Login,
    },
    Animations: {
        screen: Animations,
    },
},
{
    initialRouteName: 'Animations',
    headerMode: 'none',
})

export default class App extends Component {
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
        flex: 1,
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })

    },
})
