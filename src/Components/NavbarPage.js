/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import { getLastUpdate } from '../utils/ApiService';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';

export default class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      date: '',
      action: '',
      hideDate: this.props.hideDate,
    };
    this._isMounted = false;
  }

  static defaultProps = {
    hideDate: false,
  };

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getDate();
  }

  componentWillUnmount() {
    this._isMounted = false;
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
        <TouchableOpacity
          onPress={() => Actions.pop()}
          style={{
            // width: Screen.window.width - 100,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Icon name="chevron-left" size={24} color="#1C7CF9" />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}>
            {this.state.title ? this.state.title : 'COVID19'}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#048AD6',
            fontSize: 12,
            fontWeight: '600',
            paddingRight: 8,
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
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1B232F',
  },
});
