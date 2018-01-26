import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import {MapView} from 'react-native-maps';

export default class GoogleMapLike extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetail: false,
        }
    }

    onPressIn = () => {
        this.setState({showDetail: true});
    }

    onPressOut = () => {
        console.log('0');
        this.setState({showDetail: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                </View>
                
                <View style={styles.map}>
                </View>
                {/*<MapView style={styles.map} />*/}
                
                <TouchableWithoutFeedback
                    onPressIn={this.onPressIn}
                    onPressOut={this.onPressOut}
                >
                    <View 
                        style={styles.footer}
                    >
                        <View style={[styles.textContainer, true || this.state.showDetail ? styles.test : null]}>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 100,
        backgroundColor: '#1976D2',
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 24,
    },
    map: {
        flex: 1,
        backgroundColor: '#E0F2F1',
    },
    textContainer: {
        height: 40,
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#CFD8DC',
    },
    test: {
        backgroundColor: '#FAFAFA',
        // zIndex: 2,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: -5},
        // shadowOpacity: 0.8,
        // shadowRadius: 5,
        // elevation: 24,
        // borderTopWidth: 0,
        // borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 12,
    }
})