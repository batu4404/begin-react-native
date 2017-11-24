import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    BackHandler
} from 'react-native';

export default class LoginScreen extends Component {

    login = () => {
        this.props.navigation.navigate('LearnScreen');
    }

    gotoChat = () => {
        this.props.navigation.navigate('ChatScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    autoCorrect={false}
                    style={styles.input}
                    placeholder='User Name'
                />
                <TextInput
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Password'
                />
                <TouchableOpacity 
                    onPress={this.login}
                    style={styles.btnSignIn}
                >
                    <Text style={styles.textSignIn}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.gotoChat}
                    style={styles.btnSignIn}
                >
                    <Text style={styles.textSignIn}>Goto chat</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        paddingLeft: 50,
        paddingRight: 50
    },
    input: {
        height: 40,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    btnSignIn: {
        marginTop: 30,
        backgroundColor: '#00B0FF',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSignIn: {
        color: 'white'
    }
});
