import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'; // 0.16.0
import Header from '../../components/Header';

export default class Simple extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxValue: false,
        }
    }

    onValueChange = (value) => {
        this.setState({checkboxValue: value})
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <Header />
                <CheckBox 
                    center
                    // value={this.state.checkboxValue}
                    // onValueChange={this.onValueChange}
                    // disabled={true}
                    // style={{backgroundColor: 'pink'}}
                    checked={this.onValueChange}
                />
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    }
})