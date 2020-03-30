/* eslint-disable no-const-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';
import { getGlobalData } from '../utils/ApiService';
import SearchBar from '../Components/SearchBar';
import EmptyData from '../Components/EmptyData';
import _ from 'lodash';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';

export default class PageGlobal extends Component {
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
    await getGlobalData()
      .then(response => {
        response.map((item, key) => {
          item.id = key;
        });
        this.setState({ fullData: response, data: response, isFetching: false });
      })
      .catch(error => console.log(error));
  }, 250);

  handleSearch = text => {
    const query = text.trim().toLowerCase();
    const data = this.state.fullData;
    const newData = data.filter(q => {
      return q.countryRegion.toLowerCase().match(query);
    });
    this.setState({ data: newData, text: text });
  };

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
          <Text style={{ fontSize: 14, color: '#E5DDDD' }}>{item.countryRegion}</Text>
          <Text style={{ fontSize: 13, color: '#FC7302' }}>Positif: {item.confirmed}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 180 }}>
            <Text style={{ fontSize: 13, color: '#04AD95' }}>Sembuh: {item.recovered}</Text>
            <Text style={{ fontSize: 13, color: '#F82449' }}>Meninggal: {item.deaths}</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Icon name="info-with-circle" color="#048AD6" size={20} />
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
        <MyStatusBar />
        <NavbarPage title="Data Dunia" />
        <View>
          <SearchBar onChangeText={this.handleSearch} placeholder="Search" />
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 115,
            }}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            keyExtractor={item => item.id}
            data={this.state.data}
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
