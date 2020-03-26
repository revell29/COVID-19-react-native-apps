/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';
import { URL_PROVINSI } from '../utils/ApiService';

export default class PageProvin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
        };
    }

    componentDidMount() {
        this.getDataProvinsi();
    }

    async getDataProvinsi() {
        await fetch(URL_PROVINSI)
            .then(res => res.json())
            .then(response => {
                this.setState({ data: response.data, isFetching: false });
            });
    }

    onRefresh = () => {
        this.setState({ isFetching: true });
        setTimeout(() => {
            this.getDataProvinsi();
        }, 1000);
    };

    renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <Text style={{ fontSize: 13, color: '#E5DDDD' }}>
                    {item.provinsi}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 13, color: '#FC7302' }}>
                        {item.kasusPosi}/
                    </Text>
                    <Text style={{ fontSize: 13, color: '#04AD95' }}>
                        {item.kasusSemb}/
                    </Text>
                    <Text style={{ fontSize: 13, color: '#F82449' }}>
                        {item.kasusSemb}
                    </Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
                <MyStatusBar />
                <NavbarPage title="Provinsi" />
                <View>
                    <FlatList
                        contentContainerStyle={{
                            paddingBottom: 115,
                        }}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        keyExtractor={item => item.fid.toString()}
                        data={this.state.data}
                        renderItem={this.renderItem}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1B232F',
        marginBottom: 8,
        marginHorizontal: 8,
        borderRadius: 8,
        height: 70,
    },
});
