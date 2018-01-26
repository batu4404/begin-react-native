import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("./chat.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Notifications",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("./notif.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

export default SimpleTabNavigator = TabNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    Notifications: {
      screen: MyNotificationsScreen
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "pink",
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'white',
        height: 0
      },
      style: {
        backgroundColor: 'skyblue',
      },
    }
  }
);
