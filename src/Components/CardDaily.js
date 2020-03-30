/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';

export default class CardDaily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
    };
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        />
        <TouchableOpacity onPress={() => Actions.daily()}>
          <View style={styles.card}>
            <Text style={{ color: 'white' }}>Data Indonesia Harian</Text>
            <Icon name="chevron-right" size={20} color="white" />
          </View>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
