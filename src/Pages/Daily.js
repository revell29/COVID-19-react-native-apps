/* eslint-disable no-const-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';
import { getDaily } from '../utils/ApiService';
import EmptyData from '../Components/EmptyData';
import _ from 'lodash';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';

export default class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fullData: [],
      isFetching: true,
      text: '',
    };
  }

  componentDidMount() {
    this.getGlobal();
  }

  getGlobal = _.debounce(async () => {
    await getDaily()
      .then(response => {
        response.data.map((item, key) => {
          item.id = key;
        });
        this.setState({
          fullData: response.data,
          data: response.data,
          isFetching: false,
        });
      })
      .catch(error => console.log(error));
  }, 250);

  onRefresh = () => {
    this.setState({ isFetching: true });
    setTimeout(() => {
      this.getGlobal();
    }, 1000);
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View>
          <Text style={{ fontSize: 14, color: '#E5DDDD' }}>
            {Moment(item.tanggal).format('DD MMM')} (Hari ke-{item.harike})
          </Text>
          <Text style={{ fontSize: 13, color: '#FC7302' }}>
            Positif: {item.jumlahKasusKumulatif}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140 }}>
            <Text style={{ fontSize: 13, color: '#04AD95' }}>
              Sembuh: {item.jumlahPasienSembuh}
            </Text>
            <Text style={{ fontSize: 13, color: '#F82449' }}>
              Meninggal: {item.jumlahPasienMeninggal}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            size={20}
            name="line-graph"
            color={item.jumlahKasusBaruperHari > 0 ? '#FC7302' : 'white'}
          />
          <Text style={{ color: '#048AD6' }}>Kasus baru {item.jumlahKasusBaruperHari}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
        <MyStatusBar />
        <NavbarPage title="Data Harian" />
        <View>
          {/* <SearchBar onChangeText={this.handleSearch} placeholder="Search" /> */}
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 115,
              paddingTop: 20,
            }}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            keyExtractor={item => item.id}
            data={this.state.fullData.sort((a, b) => {
              return a.hariKe > b.hariKe;
            })}
            renderItem={this.renderItem}
          />
          {this.state.data.length === 0 && !this.state.isFetching && <EmptyData />}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1B232F',
    marginBottom: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    height: 60,
  },
});
