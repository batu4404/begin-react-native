import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import layout from '../common/layout';
import { Ionicons } from '@expo/vector-icons';

export default class Header extends Component {
    renderIconLeft() {
        if (this.props.leftSide) {
            return (
                <View
                    style={styles.leftContainer}
                >
                </View>
            )
        } else {
            return (
                <View style={styles.sideSpace} />
            )
        }
    }

    renderTitle() {
        return (
            <View style={styles.titleContainer} >
                <Text style={styles.title}>Settings</Text>
            </View>
        )
    }

    renderIconRight() {
        return (
            <View
                style={styles.rightContainer}
            >
                <TouchableOpacity>
                    <Ionicons name="md-search" size={24} color="white" style={{padding: 16}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="md-more" size={24} color="white" style={{padding: 16}} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View
                style={styles.outerContainer}
            >
                <View
                    style={styles.innerContainer}
                >
                    {this.renderIconLeft()}
                    {this.renderTitle()}
                    {this.renderIconRight()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        height: layout.appBar.height,
        flexDirection: 'row',
        backgroundColor: 'pink',
    },
    outerContainer: {
        height: layout.appBar.height,
    },
    leftContainer: {
        width: 72
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    sideSpace: {
        width: 16
    }
})