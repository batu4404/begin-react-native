import React, { Component } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

export default class Basic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _value: 0,
        }

        this._animatedValue = new Animated.Value(0);
        this._value = 0;

        this._animatedListenerId = this._animatedValue.addListener(({value}) => this.setState({_value: value}));
    }

    componentDidMount() {
        Animated.timing(
            this._animatedValue,
            {
                toValue: 200,
                duration: 1000,
            }
        ).start();

        setTimeout(() => {
            this._animatedValue.removeListener(this._animatedListenerId);
        }, 250);

        setTimeout(() => {
            this._animatedValue.stopAnimation(({value}) => console.log('stop value', value));
        }, 750);
    }

    componentWillUnmount() {
        this._animatedValue.removeAllListeners();
    }

    render() {
        // this._animatedValue.setValue(150);

        let _backgroundColor = this._animatedValue.interpolate({
            inputRange: [0, 150],
            outputRange: ['rgba(255,255,255,1)', 'rgba(0,0,0,1)'],
        });

        return (
            <View style={styles.container}>
                <Animated.View
                    style={{left: this._animatedValue, backgroundColor: _backgroundColor}}
                >
                    <Text style={styles.animatedText}>1</Text>
                </Animated.View>
                <Text>{this.state._value}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animatedText: {
        margin: 10,
        fontWeight: 'bold',
    }
})