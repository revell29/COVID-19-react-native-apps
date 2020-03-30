/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Platform, StyleSheet, StatusBar } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, ProviderPropType } from 'react-native-maps';
import NavbarPage from '../Components/NavbarPage';
import { customStyle } from '../constants/Styles';

export default class MapsKasus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getData() {
    fetch('https://covid19-public.digitalservice.id/analytics/longlat/')
      .then(res => res.json())
      .then(response => {
        const location = response.data.map((location2, key) => ({
          coordinate: {
            latitude: location2.wilayah_status_stage_latitude
              ? location2.wilayah_status_stage_latitude
              : 0.0922,
            longitude: location2.wilayah_status_stage_longitude
              ? location2.wilayah_status_stage_longitude
              : 0.0421,
          },
          fid: key,
          name: location2.kecamatan_str ? location2.kecamatan_str : location2.desa_str,
          status: `Status ${location2.status} - Gender ${location2.jenis_kelamin_str} - Umur ${location2.umur}`,
        }));

        this.setState({
          loading: false,
          data: location.slice(0, 300),
        });
      });
  }

  render() {
    return (
      <View>
        <View style={[styles.statusBar, { backgroundColor: '#171B1E' }]}>
          <StatusBar translucent backgroundColor="#171B1E" barStyle="light-content" />
        </View>
        <NavbarPage title="Maps" />
        <MapView
          style={{ height: '100%' }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: -6.1753871,
            longitude: 106.8249641,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: -6.1753871,
            longitude: 106.8249641,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={customStyle}>
          {this.state.data.map(marker => (
            <Marker
              key={marker.fid}
              title={marker.name}
              description={marker.status}
              coordinate={marker.coordinate}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 56;
MapsKasus.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
});
