import React, { Component } from 'react';
import { Animated, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AnimationsScreen from './AnimationsScreen';
import Basic from './Basic';
import AttentionSeekers from './AttentionSeekers';
import ExampleView from './ExampleView';
import DragSquare from './DragSquare';
import TryLibrary from './TryLibrary';
import GoogleMapLike from './GoogleMapLike';

const AnimationsNavigator = StackNavigator({
    AnimationsScreen: {
        screen: AnimationsScreen,
    },
    Basic: {
        screen: Basic,
    },
    AttentionSeekers: {
        screen: AttentionSeekers,
    },
    ExampleView: {
        screen: ExampleView,
    },
    DragSquare: {
        screen: DragSquare,
    },
    TryLibrary: {
        screen: TryLibrary,
    },
    GoogleMapLike: {
        screen: GoogleMapLike,
    },
},
{
    initialRouteName: 'GoogleMapLike',
    headerMode: 'none',
});

export default AnimationsNavigator;