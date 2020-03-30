/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Linking,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { getJabarRs, getBekasiRs } from '../utils/ApiService';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';
import _ from 'lodash';
import SearchBar from '../Components/SearchBar';
import EmptyData from '../Components/EmptyData';
import Icon from 'react-native-vector-icons/FontAwesome';

class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fullData: [],
      isFetching: true,
      text: '',
      title: this.props.title,
      params: this.props.params,
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.state.isFetching = true;
    this._isMounted && this.getHospital();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getHospital = _.debounce(async () => {
    if (this.state.params === 'bekasi') {
      await getBekasiRs()
        .then(response => {
          this.setState({ data: response.data, fullData: response.data, isFetching: false });
        })
        .catch(error => {
          this.setState({ isFetching: false });
          console.log(error);
        });
    } else {
      await getJabarRs()
        .then(response => {
          this.setState({ data: response.data, fullData: response.data, isFetching: false });
        })
        .catch(error => {
          this.setState({ isFetching: false });
          console.log(error);
        });
    }
  }, 250);

  openMaps(lat, lng) {
    const location = `${lat}+${lng}`;
    const url = Platform.select({
      ios: `maps://app?daddr=${location}`,
      android: `google.navigation:q=${location}`,
    });
    Linking.openURL(url);
  }

  handleSearch = text => {
    const query = text.trim().toLowerCase();
    const data = this.state.fullData;
    const newData = data.filter(q => {
      return q.nama.toLowerCase().match(query);
    });
    this.setState({ data: newData, text: text });
  };

  onRefresh = () => {
    this.setState({ isFetching: true });
    setTimeout(() => {
      this.getHospital();
    }, 1000);
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.openMaps(item.latitude, item.longitude)}>
        <View style={styles.card} key={item.nama.toString()}>
          <Text style={{ fontSize: 13, color: '#E5DDDD' }}>{item.nama}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 13,
                color: '#FC7302',
              }}>
              {item.alamat}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
        <MyStatusBar />
        <NavbarPage title={this.state.title} />
        <SearchBar placeholder="Search" onChangeText={this.handleSearch} />
        <View style={styles.notes}>
          <Icon name="info-circle" color="white" size={24} />
          <Text style={{ fontSize: 15, color: 'white' }}>
            Tekan alamat rumah sakit untuk menunjukan route terbaik.
          </Text>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 100,
              paddingTop: 20,
            }}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            keyExtractor={(item, key) => key.toString()}
            data={this.state.data}
            renderItem={item => this.renderItem(item)}
          />
          {this.state.data.length === 0 && !this.state.isFetching && <EmptyData />}
        </View>
      </SafeAreaView>
    );
  }
}

export default Hospital;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#1B232F',
    marginBottom: 8,
    marginHorizontal: 8,
    borderRadius: 8,
    height: 80,
  },
  notes: {
    backgroundColor: '#048AD6',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: -6,
    marginHorizontal: 0,
    borderRadius: 0,
  },
});
