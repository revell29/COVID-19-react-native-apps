/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Platform,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
} from 'react-native';
import Navbar from '../Components/Navbar';
import CardIndo from '../Components/CardIndo';
import CardProvinsi from '../Components/CardProvinsi';
import CardBekasi from '../Components/CardBekasi';
import RouteTab from '../Components/RouteTab';
import MyStatusBar from '../Components/MyStatusBar';
import Video from '../Components/Video';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            counter: '',
            isFetching: true,
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
                <MyStatusBar />
                {/* <StatusBar backgroundColor="#171B1E" barStyle="light-content" /> */}
                <KeyboardAvoidingView
                    behavior="position"
                    keyboardVerticalOffset={Platform.select({
                        ios: 0,
                    })}
                    enabled
                />
                <Navbar />
                <ScrollView style={{ flex: 1, backgroundColor: '#171B1E' }}>
                    <View style={styles.body}>
                        <CardIndo />
                        <CardProvinsi />
                        <CardBekasi />
                        <Video />
                    </View>
                </ScrollView>
                <RouteTab activated="1" />
            </SafeAreaView>
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
        paddingBottom: 10,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: '#79B45D',
        height: APPBAR_HEIGHT,
    },
});
