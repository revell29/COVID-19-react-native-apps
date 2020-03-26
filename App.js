/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RootNavigation from './src/navigations/RootNavigation';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <RootNavigation />;
    }
}
