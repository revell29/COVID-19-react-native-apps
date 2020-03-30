/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import Navbar from '../Components/Navbar';
import RouteTab from '../Components/RouteTab';
import Screen from '../constants/Layout';
import VerticalSwipe from 'react-native-vertical-swipe';
import Icon from 'react-native-vector-icons/Entypo';

export default class AboutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.body}>
        <MyStatusBar />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <VerticalSwipe
            closeSwipeOffset={70}
            openSwipeOffset={65}
            bottomPosition={Screen.window.height - (Platform.OS === 'ios' ? 80 : 50)}
            style={styles.dragContainer}
            offsetTop={Screen.window.height - 280}
            swipeOffset={100}
            openSwipeThreshold={100}
            closeSwipeThreshold={50}
            startOpened={false}
            content={
              <View style={styles.innerContainer}>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                  <Icon name="chevron-up" size={20} color="white" />
                  <Text style={{ color: 'white' }}>Swipe Up</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 17, paddingVertikal: 10 }}>
                  Sumber Data
                </Text>
                <Text style={{ color: '#048AD6' }}>John Hopkins University CSSE </Text>
                <TouchableOpacity
                  style={styles.buttonSupport}
                  onPress={() => Linking.openURL('instagram://user?username=apsyadiraa')}>
                  <Icon name="instagram-with-circle" size={20} color="white" />
                  <Text style={{ color: 'white', fontSize: 15, marginLeft: 10 }}>@apsyadiraa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonSupport}
                  onPress={() => Linking.openURL('whatsapp://send?text=hello&phone=6285714169483')}>
                  <Icon name="phone" size={20} color="white" />
                  <Text style={{ color: 'white', marginLeft: 10 }}>Contact Me</Text>
                </TouchableOpacity>
              </View>
            }>
            <SafeAreaView>
              <View style={styles.sectionBanner}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
                  Tentang Aplikasi
                </Text>
                <Text style={{ color: 'white', marginTop: 15, textAlign: 'center', fontSize: 15 }}>
                  Aplikasi ini dibuat bertujuan untuk memudahkan masyarakat untuk mendapatkan
                  informasi mengenai tentang COVID19 atau corona. terdapat menu Rumah sakit rujukan,
                  Call center, dan jumlah pasien terkonfirmasi positif corona. Gunakan dengan bijak
                  dan stay safe.
                </Text>
              </View>
            </SafeAreaView>
          </VerticalSwipe>
        </View>
        <SafeAreaView style={{ backgroundColor: '#1B232F' }}>
          <RouteTab activated="4" />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#171B1E',
    flex: 1,
  },
  sectionBanner: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dragContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innerContainer: {
    height: 700,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#1B232F',
    marginTop: -68,
    borderRadius: 20,
  },

  innerText: {
    padding: 20,
    color: 'yellow',
  },
  buttonSupport: {
    height: 50,
    backgroundColor: '#048AD6',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Screen.window.width - 100,
    marginTop: 20,
    borderRadius: 25,
  },
  contentContribute: {
    marginTop: 30,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  contentText: {
    color: 'white',
  },
});
