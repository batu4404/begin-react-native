import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class AttentionSeekers extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    }
})