import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class AnimationsScreen extends Component {

    navigateTo = (routeName) => {
        console.log('routeName', routeName);
        this.props.navigation.navigate(routeName);
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.navigateTo('Basic')}
                >
                    <Text style={styles.buttonTitle}>Basic</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.navigateTo('AttentionSeekers')}
                >
                    <Text style={styles.buttonTitle}>Animatable - Attention Seekers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.navigateTo('ExampleView')}
                >
                    <Text style={styles.buttonTitle}>Animatable - ExampleView</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.navigateTo('DragSquare')}
                >
                    <Text style={styles.buttonTitle}>Drag DragSquare</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.navigateTo('TryLibrary')}
                >
                    <Text style={styles.buttonTitle}>Try library</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 50,
    },
    button: {
        backgroundColor: '#03A9F4',
        margin: 10,
        padding: 10,
        flexWrap: 'wrap',
    },
    buttonTitle: {
        color: 'white',
        textAlign: 'center',
        margin: 0,
        padding: 0,
    }
})
