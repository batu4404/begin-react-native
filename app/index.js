import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens


// const navigatorStyle = {
// 	statusBarColor: 'black',
// 	statusBarTextColorScheme: 'light',
// 	navigationBarColor: 'black',
// 	navBarBackgroundColor: '#0a0a0a',
// 	navBarTextColor: 'white',
// 	navBarButtonColor: 'white',
// 	tabBarButtonColor: 'red',
// 	tabBarSelectedButtonColor: 'red',
// 	tabBarBackgroundColor: 'white'
// };

const navigatorStyle = {
    navBarHidden: true,
    tabBarBackgroundColor: 'white'
};

Navigation.startSingleScreenApp({
    screen: {
        screen: 'tuts.SimpleLoginScreen',
        title: 'Hello',
        navigatorStyle
    }
});

const styles = StyleSheet.create({
    navigator: {
        height: 0
    }
})

// export default class App extends Component {
//     render() {
//         return (
//             <SimpleLogin />
//         )
//     } 
// }