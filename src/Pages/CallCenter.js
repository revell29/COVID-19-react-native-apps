/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Linking,
    Platform,
} from 'react-native';
import MyStatusBar from '../Components/MyStatusBar';
import NavbarPage from '../Components/NavbarPage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CallCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    nama: 'Kementrian Kesehatan',
                    no: '021-5210-411',
                },
                {
                    id: 2,
                    nama: 'Kementrian Kesehatan',
                    no: '0812-1212-3119',
                },
                {
                    id: 3,
                    nama: 'Pemprov DKI Jakarta',
                    no: '112',
                },
                {
                    id: 4,
                    nama: 'Pemprov DKI Jakarta',
                    no: '0813-8837-6955',
                },
                {
                    id: 5,
                    nama: 'Pemprov Jawa Tengah',
                    no: '024-358-0713',
                },
                {
                    id: 6,
                    nama: 'Pemprov Jawa Tengah',
                    no: '0823-1360-0560',
                },
                {
                    id: 7,
                    nama: 'Pemprov Jawa Timur',
                    no: '031-843-0313',
                },
                {
                    id: 8,
                    nama: 'Pemprov Jawa Barat',
                    no: '119',
                },
            ],
        };
    }

    actionPhoneRow = item => {
        const url = Platform.select({
            ios: `telprompt:${item}`,
            android: `tel:${item}`,
        });
    };

    renderItem({ item }) {
        return (
            <TouchableOpacity
                onPress={() =>
                    Platform.OS === 'ios'
                        ? Linking.openURL(`tel:${item.no}`)
                        : Linking.openURL(`tel:${item.no}`)
                }>
                <View style={styles.card} key={item.id}>
                    <Icon size={50} name="phone" color="#048AD6" />
                    <View
                        style={{
                            justifyContent: 'center',
                            paddingHorizontal: 20,
                        }}>
                        <Text style={styles.title}>{item.nama}</Text>
                        <Text style={styles.caption}>{item.no}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#171B1E' }}>
                <MyStatusBar />
                <NavbarPage title="Call Center" />
                <View style={styles.section}>
                    <FlatList
                        contentContainerStyle={{
                            paddingBottom: 115,
                        }}
                        keyExtractor={item => item.id}
                        data={this.state.data}
                        renderItem={this.renderItem}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

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
        flexDirection: 'row',
        marginBottom: 8,
    },
});
