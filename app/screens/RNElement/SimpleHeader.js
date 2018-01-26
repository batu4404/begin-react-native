import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import { MenuProvider, Menu, MenuContext, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';

export default class SimpleHeader extends Component {
    renderMenu() {
        return (
            <Menu>
                <MenuTrigger
                    customStyles={{
                        triggerTouchable: {
                            style: {
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }
                        }
                    }}
                >
                    <Text
                        style={{ fontSize: 20, color: 'white' }}
                        accessibilityLabel="home_container_menu_button"
                    >
                        &#8942;
                    </Text>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={{color: 'red'}}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
                </MenuOptions>
            </Menu>
        )
    }

    renderHeader() {
        return (
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={this.renderMenu()}
            />
        )
    }

    render() {
        return (
            <MenuProvider>
                <View style={styles.container}>
                {this.renderHeader()}
                </View>
            </MenuProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})