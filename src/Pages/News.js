/* eslint-disable no-const-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';
import { getNewsTerkini } from '../utils/ApiService';
import SearchBar from '../Components/SearchBar';
import EmptyData from '../Components/EmptyData';
import _ from 'lodash';
import Screen from '../constants/Layout';

export default class News extends Component {
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
    await getNewsTerkini()
      .then(response => {
        response.data.map((item, key) => {
          item.id = key;
        });
        this.setState({ fullData: response.data, data: response.data, isFetching: false });
      })
      .catch(error => console.log(error));
  }, 250);

  handleSearch = text => {
    const query = text.trim().toLowerCase();
    const data = this.state.fullData;
    const newData = data.filter(q => {
      return q.title.toLowerCase().match(query);
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
      <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
        <View style={styles.card}>
          <Text style={{ fontSize: 15, color: '#E5DDDD', fontWeight: '700' }}>{item.title}</Text>
          <Text style={{ fontSize: 12, color: '#E5DDDD', marginTop: 8 }}>{item.text}</Text>
          <View style={styles.footer}>
            <Text style={{ color: 'white' }}>{item.author}</Text>
            <Text style={{ color: 'white' }}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
        <MyStatusBar />
        <NavbarPage title="Info Terkini" />
        <View>
          <SearchBar onChangeText={this.handleSearch} placeholder="Search" />
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: Screen.window.height - (Platform.OS === 'ios' ? 750 : 650),
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
    backgroundColor: '#1B232F',
    marginBottom: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    // height: 80,
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
