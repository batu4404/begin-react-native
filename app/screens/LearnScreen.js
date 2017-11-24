import React, { Component } from 'react';
import {
    View, 
    Text,
    TextInput,
    BackHandler
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Flex, Touchables, UserInterfaces} from '../learn';

const LearnNavigator = TabNavigator({
    Flex: {screen: Flex},
    Touchables: {screen: Touchables},
    UserInterfaces: {
        screen: UserInterfaces,
        navigationOptions: ({navigations}) => ({
            title: 'UI'
        })
    }
}, {
    initialRouteName: 'Flex',
    backBehavior: 'none'
})

class LearnScreen extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.navigation.stackNav.index === 0) {
          // NOTE WELL: THIS IS A ROUGH CUT CONDITION
          // MAKE SURE TO IMPLEMENT IT PROPERLY
          // IN YOUR COMPONENT
          
          return true;
        }
        return false;
    }
    render() {
        return (
            <LearnNavigator />
        )
    }
} 

export default LearnScreen;
