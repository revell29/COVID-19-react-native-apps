import React, { Component } from 'react';
import { ActionConst, Router, Scene, Stack } from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import Dashboard from '../Pages/Dashboard';
import PageProvin from '../Pages/PageProvin';
import PageBekasi from '../Pages/PageBekasi';
import PageMenu from '../Pages/PageMenu';
import Hospital from '../Pages/Hospital';
import CallCenter from '../Pages/CallCenter';
import MapsKasus from '../Pages/MapsKasus';
import PageGlobal from '../Pages/PageGlobal';
import News from '../Pages/News';
import Prixa from '../Pages/Prixa';
import PageFaq from '../Pages/PageFaq';
import AboutApp from '../Pages/AboutApp';
import Daily from '../Pages/Daily';
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
          type={ActionConst.RESET}
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
        <Scene
          key="pageGlobal"
          // type={ActionConst.RESET}
          component={PageGlobal}
          hideNavBar={true}
        />
        <Scene key="pageMenu" component={PageMenu} hideNavBar={true} />
        <Scene key="hospital" component={Hospital} hideNavBar={true} />
        <Scene key="mapsKasus" component={MapsKasus} hideNavBar={true} />
        <Scene key="callCenter" component={CallCenter} hideNavBar={true} />
        <Scene key="newsInfo" component={News} hideNavBar={true} />
        <Scene key="prixa" component={Prixa} hideNavBar={true} />
        <Scene key="faq" component={PageFaq} hideNavBar={true} />
        <Scene key="about" component={AboutApp} hideNavBar={true} />
        <Scene key="daily" component={Daily} hideNavBar={true} />
      </Stack>
    </Router>
  );
};

export default class RootNavigation extends Component {
  render() {
    return <RootStackNavigation />;
  }
}
