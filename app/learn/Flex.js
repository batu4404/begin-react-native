import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export class Flex1 extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
            </View>
        )
    }
}

export default class Flex extends Component {
    constructor(props) {
        super(props);
        this.square = new Array(3);
        this.square[0] = <View key='0' style={{height: 50, width: 50, backgroundColor: 'powderblue'}}/>
        this.square[1] = <View key='1' style={{height: 50, width: 50, backgroundColor: 'skyblue'}}/>
        this.square[2] = <View key='2' style={{height: 50, width: 50, backgroundColor: 'steelblue'}}/>
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    {this.square}
                </View>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    {this.square}
                </View>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    {this.square}
                </View>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    {this.square}
                </View>
                <View style={{
                    flex: 1, 
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    {this.square}
                </View>
            </View>
        )
    }
}