/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
    };
  }

  render() {
    return (
      <View
        style={{
          marginBottom: 8,
          marginTop: -15,
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: '#1B232F',
        }}>
        <TextInput
          style={{
            height: 40,
            borderRadius: 20,
            backgroundColor: '#171B1E',
            paddingLeft: 20,
            color: '#A7A9AC',
          }}
          {...this.props}
          placeholder={this.state.placeholder}
          placeholderTextColor="#A7A9AC"
        />
      </View>
    );
  }
}

export default SearchBar;
