/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';
import { getDataBekasi } from '../utils/ApiService';

export default class PageBekasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: true,
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getDataBekasi();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async getDataBekasi() {
    await getDataBekasi()
      .then(response => {
        this.setState({ data: response.Data, isFetching: false });
      })
      .catch(error => console.log(error));
  }

  onRefresh = () => {
    this.setState({ isFetching: true });
    setTimeout(() => {
      this.getDataBekasi();
    }, 1000);
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={{ fontSize: 13, color: '#E5DDDD' }}>{item.kecamatan}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 13, color: '#FC7302' }}>{item.terkonfirmasi}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
        <MyStatusBar />
        <NavbarPage title="Bekasi" />
        <View style={{ paddingBottom: 30 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            keyExtractor={item => item.kecamatan.toString()}
            data={this.state.data}
            renderItem={this.renderItem}
          />
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
    height: 70,
  },
});
