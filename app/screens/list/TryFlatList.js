import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

let dataList = [];
for (let i = 0; i < 100; i++) {
    dataList.push(i+1);
}

export class ListItem extends Component {

    render() {
        const {data} = this.props;
        console.log('render item');
        
        return (
            <View
                style={styles.listItemContainer}
            >
                <TouchableOpacity
                    style={{flex: 1}}
                >
                    <View>
                        <Text style={{ textColor: 'white' }}>
                            {data}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default class TryFlatList extends Component {

    _keyExtractor = (item, index) => index+1;

    _renderItem = ({item}) => {
        console.log('item');
        return (
            <ListItem
                data={item}
            />
        )
    }

    render() {
        console.log('render flat list', dataList.length);
        return (
            <View
                style={styles.container}
            >
                <FlatList
                    style={styles.list}
                    data={dataList}
                    // extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={10}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    list: {
        flex: 1,
        backgroundColor: 'white',
        margin: 40,
    },
    listItemContainer: {
        height: 40,
        backgroundColor: 'yellow',
        borderBottomWidth: 1,
    },
})