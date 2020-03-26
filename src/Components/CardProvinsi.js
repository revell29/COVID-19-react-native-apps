/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { URL_PROVINSI } from '../utils/ApiService';
import { Actions } from 'react-native-router-flux';

export default class CardProvinsi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getProvinsi();
    }

    componentWillUnmount() {
        this.getProvinsi();
    }

    async getProvinsi() {
        await fetch(URL_PROVINSI)
            .then(res => res.json())
            .then(response => {
                this.setState({
                    data: response.data.slice(0, 4),
                });
            });
    }

    render() {
        const items = this.state.data.map((values, key) => {
            return (
                <View
                    key={values.provinsi.toString()}
                    style={{
                        padding: 12,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ fontSize: 13, color: '#E5DDDD' }}>
                        {values.provinsi}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: '#FC7302' }}>
                            {values.kasusPosi}/
                        </Text>
                        <Text style={{ fontSize: 13, color: '#04AD95' }}>
                            {values.kasusSemb}/
                        </Text>
                        <Text style={{ fontSize: 13, color: '#F82449' }}>
                            {values.kasusSemb}
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
                    <Text style={styles.title}>Data per provinsi</Text>
                    <TouchableOpacity onPress={() => Actions.pageProvinsi()}>
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
        borderRadius: 10,
        marginTop: 20,
        padding: 20,
        backgroundColor: '#1B232F',
    },
});
