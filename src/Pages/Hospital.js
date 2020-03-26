/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Linking,
    FlatList,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { HOSPITAL } from '../utils/ApiService';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';

class Hospital extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isFetching: true,
        };
    }

    componentDidMount() {
        this.getHospital();
    }

    componentWillUnmount() {
        this.getHospital();
    }

    async getHospital() {
        await fetch(HOSPITAL)
            .then(res => res.json())
            .then(response =>
                this.setState({ data: response.data, isFetching: false }),
            );
    }

    openMaps(lat, lng) {
        const location = `${lat}+${lng}`;
        const url = Platform.select({
            ios: `maps://app?daddr=${location}`,
            android: `google.navigation:q=${location}`,
        });
        Linking.openURL(url);
    }

    onRefresh = () => {
        this.setState({ isFetching: true });
        setTimeout(() => {
            this.getHospital();
        }, 1000);
    };

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this.openMaps(item.latitude, item.longitude)}>
                <View style={styles.card} key={item.nama.toString()}>
                    <Text style={{ fontSize: 13, color: '#E5DDDD' }}>
                        {item.nama}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 13, color: '#FC7302' }}>
                            {item.alamat}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
                <MyStatusBar />
                <NavbarPage title="Rumah Sakit" />
                <View style={styles.notes}>
                    <Text style={{ fontSize: 15, color: 'white' }}>
                        Tekan alamat rumah sakit untuk menunjukan route terbaik.
                    </Text>
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={{
                            paddingBottom: 100,
                            paddingTop: 20,
                        }}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        keyExtractor={item => item.nama}
                        data={this.state.data}
                        renderItem={item => this.renderItem(item)}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default Hospital;

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#1B232F',
        marginBottom: 8,
        marginHorizontal: 8,
        borderRadius: 8,
        height: 80,
    },
    notes: {
        backgroundColor: '#048AD6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginHorizontal: 0,
        borderRadius: 0,
    },
});
