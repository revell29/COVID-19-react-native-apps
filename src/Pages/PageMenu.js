/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import RouteTab from '../Components/RouteTab';
import MyStatusBar from '../Components/MyStatusBar';
import Navbar from '../Components/Navbar';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PageMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          icon: 'hospital-o',
          title: 'Rumah Sakit Di Jawa Barat',
          caption: 'Daftar rumah sakit rujukan pasien corona di Jawa Barat',
          route: 'hospital',
          headTitle: 'RS Jawa Barat',
          params: '',
        },
        {
          id: 2,
          icon: 'hospital-o',
          title: 'Rumah Sakit Di Bekasi',
          caption: 'Daftar rumah sakit rujukan pasien corona di Bekasi',
          route: 'hospital',
          headTitle: 'RS Bekasi',
          params: 'bekasi',
        },
        {
          id: 3,
          icon: 'phone',
          title: 'Call Center',
          caption:
            'Layanan darurat via telepon yang disediakan oleh Kemkes dan juga Pemprov DKI Jakarta',
          route: 'callCenter',
          params: '',
        },
        {
          id: 4,
          icon: 'map',
          title: 'Peta Kasus',
          caption:
            'Titik lokasi merupakan titik acak (random by system) wilayah yang tertera pada identitas kasus dan tidak menunjuk pada alamat persis',
          route: 'mapsKasus',
          params: '',
        },
        {
          id: 5,
          icon: 'newspaper-o',
          title: 'Info Terkini',
          caption: 'Informasi terkini mengenai COVID-19',
          route: 'newsInfo',
          params: '',
        },
        {
          id: 6,
          icon: 'heart',
          title: 'Periksa Mandiri',
          caption: 'Perikasa mandiri diri anda.',
          route: 'prixa',
          params:
            'https://covid19.prixa.ai/?pId=817d1193-f4ce-439e-b357-16466695d970&appId=9f9d9731-8331-4cb3-a441-95d5d8b44d7f',
        },
      ],
    };
  }

  renderItem({ item }) {
    const routeAction = () => {
      Actions[item.route]({ params: item.params, title: item.headTitle });
    };

    return (
      <TouchableOpacity onPress={() => routeAction()}>
        <View style={styles.card} key={item.id}>
          <Icon size={50} name={item.icon} color="#048AD6" />
          <View
            style={{
              justifyContent: 'center',
              paddingHorizontal: 26,
            }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
          <Navbar title="Menu" />
          <View styles={styles.section}>
            <FlatList
              contentContainerStyle={{
                paddingBottom: 115,
              }}
              keyExtractor={item => item.id.toString()}
              data={this.state.data}
              renderItem={this.renderItem}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={{ backgroundColor: '#1B232F' }}>
          <RouteTab activated="2" />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: '#171B1E',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },

  caption: {
    color: 'white',
    paddingVertical: 5,
  },

  card: {
    backgroundColor: '#1B232F',
    borderRadius: 8,
    padding: 20,
    height: 90,
    flexDirection: 'row',
    marginBottom: 8,
  },
});
