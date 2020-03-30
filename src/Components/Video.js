/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Thumbnail } from 'react-native-thumbnail-video';
import Screen from '../constants/Layout';
import { getVideo } from '../utils/ApiService';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
    };

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getData();
  }

  UNSAFE_componentWillUnmount() {
    this._isMounted = false;
  }

  async getData() {
    await getVideo()
      .then(response => {
        this.setState({ data: response.data, visible: true });
      })
      .catch(error => console.log(error));
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
        <View styles={styles.card}>
          <Thumbnail
            type="high"
            url={item.link}
            imageWidth={Screen.window.width - 20}
            containerStyle={{ paddingRight: 10, borderRadius: 20 }}
          />
        </View>
        <View
          style={{
            width: Screen.window.width - 20,
            height: 70,
            padding: 10,
            backgroundColor: '#1B232F',
          }}>
          <Text style={{ color: 'white', fontSize: 18 }}>{item.caption}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        styles={{
          marginVertikal: 20,
          backgroundColor: '#1B232F',
          height: 200,
        }}>
        <Text style={styles.title}>Video Terkait</Text>
        <ShimmerPlaceHolder
          colorShimmer={['#171B1E', '#222D34', '#222D34']}
          autoRun={true}
          duration="1500"
          visible={this.state.visible}
          style={{ height: 140, width: '100%', borderRadius: 8, marginTop: 15 }}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
            paddingTop: 20,
          }}
          keyExtractor={item => item.link.toString()}
          data={this.state.data}
          renderItem={item => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default Video;

const styles = StyleSheet.create({
  title: {
    marginTop: 22,
    fontSize: 15,
    color: '#048AD6',
    paddingHorizontal: 8,
  },
  card: {
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '#1B232F',
  },
});
