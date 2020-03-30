/* eslint-disable no-unused-vars */
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
  RefreshControl,
  BackHandler,
  ToastAndroid,
  Alert,
} from 'react-native';
import Navbar from '../Components/Navbar';
import CardIndo from '../Components/CardIndo';
import CardProvinsi from '../Components/CardProvinsi';
import CardDaily from '../Components/CardDaily';
import CardGlobal from '../Components/CardGlobal';
import RouteTab from '../Components/RouteTab';
import MyStatusBar from '../Components/MyStatusBar';
import Video from '../Components/Video';

export default class Dashboard extends React.Component {
  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener('didFocus', () =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
    this.state = {
      data: [],
      counter: '',
      isFetching: false,
      outButton: 0,
    };
  }

  onBackButtonPressAndroid = () => {
    BackHandler.exitApp();
    return true;
  };

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', () =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid),
    );
  }

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
    this._subscribe && this._subscribe.remove();
  }

  _onRefresh() {
    return (
      <>
        <CardIndo />
        <CardProvinsi />
        <CardGlobal />
        <Video />
      </>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
          <MyStatusBar />
          <Navbar />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: '#171B1E' }}
            refreshControl={
              <RefreshControl refreshing={this.state.isFetching} onRefresh={this._onRefresh} />
            }>
            <View style={styles.body}>
              <CardIndo />
              <CardDaily />
              <CardProvinsi />
              <CardGlobal />
              <Video />
            </View>
          </ScrollView>
        </SafeAreaView>
        <SafeAreaView style={{ backgroundColor: '#1B232F' }}>
          <RouteTab activated="1" />
        </SafeAreaView>
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
