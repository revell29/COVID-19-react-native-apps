/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import NavbarPage from '../Components/NavbarPage';
import MyStatusBar from '../Components/MyStatusBar';
export default class Prixa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.params,
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
        <MyStatusBar />
        <NavbarPage title="Perika Mandiri" hideDate={true} />
        <View style={{ flex: 1 }}>
          <WebView
            source={{
              uri:
                'https://covid19.prixa.ai/?pId=817d1193-f4ce-439e-b357-16466695d970&appId=9f9d9731-8331-4cb3-a441-95d5d8b44d7f',
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
