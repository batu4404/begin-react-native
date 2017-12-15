import React, { Component } from 'react';
import {
    TouchableWithoutFeedback,
    Text,
    Animated,
    StyleSheet,
} from 'react-native';
import { View } from 'react-native-animatable';

export default class TryLibrary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    onPress = () => {
        this.setState({message: 'hello'});
        this._ref.animate('shake', 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={this.onPress}
                >
                    <View 
                        ref={(ref) => this._ref = ref}
                        style={styles.button}
                    >
                        <Text style={styles.text}>{this.state.message}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 20,
    },
    button: {
        height: 40,
        backgroundColor: 'pink',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
})