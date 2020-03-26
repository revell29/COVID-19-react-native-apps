/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { URL_BEKASI } from '../utils/ApiService';
import { Actions } from 'react-native-router-flux';

export default class CardBekasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getProvinsi();
    }

    async getProvinsi() {
        await fetch(URL_BEKASI)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    data: response.Data.slice(0, 4),
                });
            });
    }

    render() {
        const items = this.state.data.map(values => {
            return (
                <View
                    key={values.kecamatan}
                    style={{
                        padding: 12,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ fontSize: 13, color: '#E5DDDD' }}>
                        {values.kecamatan}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: '#FC7302' }}>
                            {values.terkonfirmasi}
                        </Text>
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
                    <Text style={styles.title}>Data kasus di bekasi</Text>
                    <TouchableOpacity onPress={() => Actions.pageBekasi()}>
                        <Text style={styles.title2}>view more</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>{items}</View>
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
        borderRadius: 8,
        marginTop: 20,
        padding: 20,
        backgroundColor: '#1B232F',
    },
});
