/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Linking,
    StyleSheet,
} from 'react-native';
import { Thumbnail } from 'react-native-thumbnail-video';
import Screen from '../constants/Layout';

export class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    caption: 'Wajib tau! Gejala virus corona dan pencegahannya',
                    link: 'https://youtu.be/5h-OXcjc4TY',
                },
                {
                    caption: 'Cerita kesembuhan pertama pasien Corona.',
                    link: 'https://youtu.be/WeQxI0OTmUU',
                },
                {
                    caption: 'Tentang virus corona yang harus kita ketahui.',
                    link: 'https://youtu.be/BtN-goy9VOY',
                },
            ],
        };
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                <View styles={styles.card}>
                    <Thumbnail
                        type="high"
                        url={item.link}
                        imageWidth={Screen.window.width - 30}
                        containerStyle={{ paddingRight: 10 }}
                    />
                </View>
                <View
                    style={{
                        width: Screen.window.width - 30,
                        height: 70,
                        padding: 10,
                        backgroundColor: '#1B232F',
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                        }}>
                        {item.caption}
                    </Text>
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
