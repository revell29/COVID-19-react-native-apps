/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import RouteTab from '../Components/RouteTab';
import Navbar from '../Components/Navbar';
import Screen from '../constants/Layout';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { dataFaq } from '../constants/Data';
import Icon from 'react-native-vector-icons/Entypo';

export default class PageFaq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      data: dataFaq,
    };

    this._isMounted = false;
  }

  renderHeader = (section, index, isActive) => {
    return (
      <Animatable.View duration={300} transition="backgroundColor" style={styles.content}>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontWeight: '600',
            width: Screen.window.width - 80,
          }}>
          {section.title}
        </Text>
        <View>
          {isActive ? (
            <Icon name="chevron-up" size={20} color="white" />
          ) : (
            <Icon name="chevron-down" size={20} color="white" />
          )}
        </View>
      </Animatable.View>
    );
  };

  renderContent = (item, isActive) => {
    return (
      <Animatable.View duration={300} transition="backgroundColor" style={{ paddingBottom: 10 }}>
        <Animatable.Text style={styles.contentText}>
          <Text>{item.text}</Text>
        </Animatable.Text>
      </Animatable.View>
    );
  };

  _updateSections = data => {
    this.setState({
      activeSections: data.includes(undefined) ? [] : data,
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#171B1E' }}>
        <MyStatusBar />
        <SafeAreaView style={{ flex: 1 }}>
          <Navbar title="FAQ" />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              <Accordion
                sections={this.state.data}
                activeSections={this.state.activeSections}
                touchableComponent={TouchableOpacity}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                onChange={this._updateSections}
                sectionContainerStyle={{
                  backgroundColor: '#1B232F',
                  borderRadius: 8,
                  marginBottom: 10,
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        <SafeAreaView style={{ backgroundColor: '#1B232F' }}>
          <RouteTab activated="3" />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#171B1E',
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  content: {
    height: 60,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  contentActive: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentText: {
    padding: 10,
    color: 'white',
    paddingBottom: 20,
    width: Screen.window.width - 25,
  },
});
