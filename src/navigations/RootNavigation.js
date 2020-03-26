import React, { Component } from 'react';
import { ActionConst, Router, Scene, Stack } from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import Dashboard from '../Pages/Dashboard';
import PageProvin from '../Pages/PageProvin';
import PageBekasi from '../Pages/PageBekasi';
import PageMaps from '../Pages/PageMaps';
import Hospital from '../Pages/Hospital';
import CallCenter from '../Pages/CallCenter';
import MapsKasus from '../Pages/MapsKasus';

const RootStackNavigation = () => {
    return (
        <Router>
            <Stack
                key="root"
                transitionConfig={() => ({
                    screenInterpolator: CardStackStyleInterpolator.forInitial,
                })}>
                <Scene
                    initial
                    // type={ActionConst.RESET}
                    key="dashboard"
                    component={Dashboard}
                    hideNavBar={true}
                />
                <Scene
                    key="pageBekasi"
                    // type={ActionConst.RESET}
                    component={PageBekasi}
                    hideNavBar={true}
                />
                <Scene
                    key="pageProvinsi"
                    // type={ActionConst.RESET}
                    component={PageProvin}
                    hideNavBar={true}
                />
                <Scene key="pageMaps" component={PageMaps} hideNavBar={true} />
                <Scene key="hospital" component={Hospital} hideNavBar={true} />
                <Scene
                    key="mapsKasus"
                    component={MapsKasus}
                    hideNavBar={true}
                />
                <Scene
                    key="callCenter"
                    component={CallCenter}
                    hideNavBar={true}
                />
            </Stack>
        </Router>
    );
};

export default class RootNavigation extends Component {
    render() {
        return <RootStackNavigation />;
    }
}
