/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { INDO_URL } from '../utils/ApiService';

export default class CardIndo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getDataIndo();
    }

    async getDataIndo() {
        await fetch(INDO_URL)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    data: res,
                });
            });
    }

    render() {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={styles.cardPositif}>
                        <Text style={styles.title}> POSITIF </Text>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.number}>
                                {this.state.data.jumlahKasus}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardDeath}>
                        <Text style={styles.title}> MENINGGAL </Text>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.number}>
                                {this.state.data.meninggal}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: 20 }} />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={styles.cardRawat}>
                        <Text style={styles.title}> PERAWATAN </Text>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.number}>
                                {this.state.data.perawatan}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardSembuh}>
                        <Text style={styles.title}> SEMBUH </Text>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.number}>
                                {this.state.data.sembuh}
                            </Text>
                        </View>
                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    cardPositif: {
        height: 109,
        width: '48%',
        backgroundColor: '#FC7302',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDeath: {
        height: 109,
        width: '48%',
        backgroundColor: '#F82449',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardRawat: {
        height: 109,
        width: '48%',
        backgroundColor: '#24ACF8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardSembuh: {
        height: 109,
        width: '48%',
        backgroundColor: '#04AD95',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        color: 'white',
        fontWeight: '500',
    },
    number: {
        fontSize: 35,
        fontWeight: '600',
        color: 'white',
    },
});
