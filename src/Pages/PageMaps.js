/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import RouteTab from '../Components/RouteTab';
import MyStatusBar from '../Components/MyStatusBar';
import Navbar from '../Components/Navbar';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class PageMaps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    icon: 'hospital-o',
                    title: 'Rumah Sakit',
                    caption: 'Daftar rumah sakit rujukan pasien corona',
                    route: Actions.hospital,
                },
                {
                    id: 2,
                    icon: 'phone',
                    title: 'Call Center',
                    caption:
                        'Layanan darurat via telepon yang disediakan oleh Kemkes dan juga Pemprov DKI Jakarta',
                    route: Actions.callCenter,
                },
                {
                    id: 3,
                    icon: 'map',
                    title: 'Peta Kasus',
                    caption:
                        'Titik lokasi merupakan titik acak (random by system) wilayah yang tertera pada identitas kasus dan tidak menunjuk pada alamat persis',
                    route: Actions.mapsKasus,
                },
            ],
        };
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity onPress={item.route}>
                <View style={styles.card} key={item.id}>
                    <Icon size={50} name={item.icon} color="#048AD6" />
                    <View
                        style={{
                            justifyContent: 'center',
                            paddingHorizontal: 20,
                        }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.caption}>{item.caption}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
                <MyStatusBar />
                <Navbar title="Menu" />
                <View style={styles.section}>
                    <FlatList
                        contentContainerStyle={{
                            paddingBottom: 115,
                        }}
                        keyExtractor={item => item.id.toString()}
                        data={this.state.data}
                        renderItem={this.renderItem}
                    />
                </View>
                <RouteTab activated="2" />
            </SafeAreaView>
        );
    }
}

export default PageMaps;
const styles = StyleSheet.create({
    section: {
        flex: 1,
        backgroundColor: '#171B1E',
        paddingHorizontal: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
    },

    caption: {
        color: 'white',
        paddingVertical: 5,
    },

    card: {
        backgroundColor: '#1B232F',
        borderRadius: 8,
        padding: 15,
        height: 80,
        flexDirection: 'row',
        marginBottom: 8,
    },
});
