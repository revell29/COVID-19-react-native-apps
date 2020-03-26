/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Platform } from 'react-native';

export default class MyStatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={[styles.statusBar, { backgroundColor: '#171B1E' }]}>
                <StatusBar
                    translucent
                    backgroundColor="#171B1E"
                    barStyle="light-content"
                />
            </View>
        );
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 0 : 56;

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#171B1E',
        flex: 1,
        paddingHorizontal: 10,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: '#79B45D',
        height: APPBAR_HEIGHT,
    },
});
