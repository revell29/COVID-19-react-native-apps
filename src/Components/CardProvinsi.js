/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDataProvinsi } from '../utils/ApiService';
import { Actions } from 'react-native-router-flux';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/Entypo';

export default class CardProvinsi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
    };
  }

  componentDidMount() {
    this.getProvinsi();
  }

  componentWillUnmount() {
    this.getProvinsi();
  }

  getProvinsi() {
    this.state.visible = false;
    getDataProvinsi()
      .then(response => {
        this.setState({ data: response.data.slice(0, 4), visible: true });
      })
      .catch(error => console.log(error));
  }

  render() {
    const items = this.state.data.map((values, key) => {
      return (
        <View
          key={values.provinsi.toString()}
          style={{
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{ fontSize: 14, color: '#E5DDDD' }}>{values.provinsi}</Text>
            <Text style={{ fontSize: 13, color: '#FC7302' }}>Positif: {values.kasusPosi}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140 }}>
              <Text style={{ fontSize: 13, color: '#04AD95' }}>Sembuh: {values.kasusSemb}</Text>
              <Text style={{ fontSize: 13, color: '#F82449' }}>Meninggal: {values.kasusMeni}</Text>
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
    });

    return (
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.title}>Data per provinsi</Text>
          <TouchableOpacity onPress={() => Actions.pageProvinsi()}>
            <Text style={styles.title2}>view more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <ShimmerPlaceHolder
            colorShimmer={['#171B1E', '#222D34', '#222D34']}
            autoRun={true}
            duration="2000"
            visible={this.state.visible}
            style={{ height: 20, width: '100%', borderRadius: 8, marginBottom: 15 }}>
            {items}
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            colorShimmer={['#171B1E', '#222D34', '#222D34']}
            autoRun={true}
            duration="1200"
            visible={this.state.visible}
            style={{ height: 20, width: '100%', borderRadius: 8, marginBottom: 15 }}
          />
          <ShimmerPlaceHolder
            colorShimmer={['#171B1E', '#222D34', '#222D34']}
            autoRun={true}
            duration="1500"
            visible={this.state.visible}
            style={{ height: 20, width: '100%', borderRadius: 8, marginBottom: 15 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: '#048AD6',
  },
  title2: {
    fontSize: 12,
    color: '#A4A4A4',
  },
  card: {
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#1B232F',
  },
});
