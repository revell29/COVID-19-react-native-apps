/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Moment from 'moment';
import { getLastUpdate } from '../utils/ApiService';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      date: '',
      hideDate: this.props.hideDate,
    };
  }

  componentDidMount() {
    this.getDate();
  }

  async getDate() {
    await getLastUpdate()
      .then(response => {
        this.setState({
          data: Moment(response.lastUpdate).format('L HH:MM'),
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.section}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
          {this.state.title ? this.state.title : 'COVID19'}
        </Text>
        <Text
          style={{
            color: '#048AD6',
            fontSize: 12,
            fontWeight: '600',
          }}>
          {this.state.hideDate ? '' : `Last update ${this.state.data}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    height: 60,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#171B1E',
  },
});
