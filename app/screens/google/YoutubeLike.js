import React, {Component} from 'react';
import {
    View, 
    Text, 
    InputText,
    StyleSheet,
    Image
} from 'react-native';

// class Item extends Component {
//     render() {
//         return (
//             <View style={styles.itemContainer}>
//                 <Image 
//                     style={styles.itemImage}
//                     source={this.props.source} 
//                 />
//                 <View style={styles.itemDesciption}>
//                     <Image 
//                         style={styles.itemAvatar}
//                         source={this.props.source} 
//                     />
//                     <View>
//                         <Text>Dragon tristana</Text>
//                         <Text>Dragon tristana</Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

class Item extends Component {
    render() {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.itemDesciption}>
                    <Image 
                        style={styles.itemAvatar}
                        source={this.props.source} 
                    />
                    <View>
                        <Text>Dragon tristana</Text>
                        <Text>Dragon tristana</Text>
                    </View>
                </View>
            </View>
        )
    }
}

class YoutubeLike extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Item source={require('../../resources/img/tristana.jpg')} />
                <Item source={require('../../resources/img/tristana.jpg')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        alignItems: 'center',
        borderColor: '#555',
        borderBottomWidth: 0.5,
        paddingHorizontal: 10,
    },
    itemImage: {
        resizeMode: 'cover',
    },
    itemAvatar: {
        height: 40,
        width: 40,
        borderRadius: 100
    },
    itemDesciption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'blue'
    }
});

export default YoutubeLike;