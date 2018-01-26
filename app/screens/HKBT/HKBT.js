import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

var {height, width} = Dimensions.get('screen');

export default class HKBT extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello',
            backgroundColor: '#fff'
        };
    }

    onSwipeUp(gestureState) {
        this.setState({message: 'Swiped up!'});
    }

    onSwipeDown(gestureState) {
        this.setState({message: 'Swiped down!'});
    }

    onSwipeLeft(gestureState) {
        this.setState({message: 'Swiped left!'});
    }

    onSwipeRight(gestureState) {
        this.setState({message: 'Swiped right!'});
    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_UP:
            this.setState({backgroundColor: 'red'});
            break;
          case SWIPE_DOWN:
            this.setState({backgroundColor: 'green'});
            break;
          case SWIPE_LEFT:
            this.setState({backgroundColor: 'blue'});
            break;
          case SWIPE_RIGHT:
            this.setState({backgroundColor: 'yellow'});
            break;
        }
    }

    render() {
        const config = {
            velocityThreshold: 0,
            directionalOffsetThreshold: 50
        };

        return (
            <View style={styles.container}>
                <GestureRecognizer
                    // onSwipe={(direction, state) => this.onSwipe(direction, state)}
                    onSwipeUp={(state) => this.onSwipeUp(state)}
                    onSwipeDown={(state) => this.onSwipeDown(state)}
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    config={config}
                    style={
                    [styles.SwipeContainer, {backgroundColor: this.state.backgroundColor}]
                    }
                >
                    <View style={{flex: 1}}>
                        <View style={styles.item}>
                            <Text>1</Text>
                        </View>
                    </View>
                </GestureRecognizer>
            </View>
        )
    }
}


const styles =  StyleSheet.create({
    container: {
        flex: 1
    },
    SwipeContainer: {
        height: width,
        width: width
    },
    item: {
        width: width / 4,
        height: width / 4,
        backgroundColor: 'blue'
    }
})