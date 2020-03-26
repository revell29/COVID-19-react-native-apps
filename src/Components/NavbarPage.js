/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Moment from 'moment';
import { LAST_UPDATE } from '../utils/ApiService';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
import Screen from '../constants/Layout';

export default class NavbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            date: '',
            action: '',
        };
    }

    componentDidMount() {
        this.getDate();
    }

    async getDate() {
        await fetch(LAST_UPDATE)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    data: Moment(response.lastUpdate).format('L HH:MM'),
                });
            });
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
                    }}>
                    Last update {this.state.data}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    section: {
        height: 60,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#171B1E',
    },
});
