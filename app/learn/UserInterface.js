import React, { Component } from 'react';

import { 
    View,
    Text,
    Slider,
    Switch,
    Button,
    Alert
} from 'react-native';

export default class UserInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchValue: true
        }
    }
    
    _onPress() {
        Alert.alert("You've pressed me!!!")
    }

    _onSwitchChage = () => {
        this.setState({...this.state, switchValue: !this.state.switchValue});
    }

    render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Button title="Press me!"
            onPress={this._onPress}
            style={{
                padding: 10
            }}
        /> 
        <Switch 
            value={this.state.switchValue}
            onValueChange={this._onSwitchChage}
        />       
      </View>
    )
  }
}
