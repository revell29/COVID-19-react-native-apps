/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
import Screen from '../constants/Layout';

export default class RouteTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: this.props.activated,
        };
    }

    static defaultProps = {
        activated: '1',
    };

    render() {
        return (
            <View>
                <View
                    style={{
                        width: Screen.window.width,
                        height: 0.5,
                        backgroundColor: '#171B1E',
                    }}
                />
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: 'center', padding: 11 }}
                        onPress={() => Actions.dashboard()}>
                        <Icon
                            size={20}
                            name="home"
                            color={
                                this.state.activated === '1'
                                    ? '#048AD6'
                                    : '#A4A4A4'
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: 'center', padding: 8 }}
                        onPress={() => Actions.pageMaps()}>
                        <Icon
                            size={20}
                            name="map"
                            color={
                                this.state.activated === '2'
                                    ? '#048AD6'
                                    : '#A4A4A4'
                            }
                        />
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        style={{ flex: 1, alignItems: 'center', padding: 10 }}
                        onPress={() => Actions.tabHelp()}>
                        <Icon
                            size={20}
                            name="cog"
                            color={
                                this.state.activated === '3'
                                    ? '#048AD6'
                                    : '#A4A4A4'
                            }
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        height: 54,
        width: Screen.window.width,
        backgroundColor: '#1B232F',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        alignItems: 'baseline',
    },
});
