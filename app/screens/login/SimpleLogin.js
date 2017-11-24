import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LoginScreen extends Component {

    goGoogle = () => {
        console.log('google', this.props);
        this.props.navigation.navigate('YoutubeLike');
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
                    style={styles.input}
                    placeholder='Password'
                />
                <TouchableOpacity style={styles.btnSignIn}>
                    <Text style={styles.textSignIn}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.altContainer}>
                    <View style={styles.altHorizontal}></View>
                    <Text style={styles.altText}>Or</Text>
                    <View style={styles.altHorizontal}></View>
                </View>
                <TouchableOpacity style={[styles.signInWithThirdParty, styles.signInWithFacebook]}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="facebook" size={20} style={styles.thirdPartyIcon} color="#FFF" />
                        <Text style={styles.textSignIn}>
                            Sign in with Facebook
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.goGoogle}
                    style={[styles.signInWithThirdParty, styles.signInWithGoogle]}
                >
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="google" size={20} style={styles.thirdPartyIcon} color="#FFF" />
                        <Text style={styles.textSignIn}>
                            Sign in with Google
                        </Text>
                    </View>
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
        marginTop: 15,
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
        color: 'white',
        fontWeight: 'bold'
    },
    signInWithThirdParty: {
        marginBottom: 15,
        backgroundColor: '#3b5998',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInWithFacebook: {
        backgroundColor: '#3b5998',
    },
    signInWithGoogle: {
        backgroundColor: '#e62117',
    },
    thirdPartyIcon: {
        marginHorizontal: 10
    },
    altContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 10
    },
    altHorizontal: {
        margin: 10,
        flex: 1,
        height: 1, 
        width: 20, 
        backgroundColor: '#999'
    },
    altText: {
        
    }, 
});
