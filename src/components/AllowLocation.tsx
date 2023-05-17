import React, {Component} from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {height, width} from '../constants/ScreenDimentions';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
export class AllowLocation extends Component {
  constructor() {
    super();
    this.state = {phone: null};
  }
  getCityInfo = async (currentLongitude, currentLatitude) => {
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=3322c1bcb8b9484399f71157231705&q=${currentLatitude},${currentLongitude}`,
      );
      console.log(res.data.location);
      await firestore()
        .collection('Users')
        .doc(this.state.phone)
        .update({
          city: res.data.location.name,
          state: res.data.location.region,
        })
        .then(() => {
          console.log('User updated!');
        });
      this.props.navigation.navigate('Tabs');
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    const res = await AsyncStorage.getItem('USER_DATA');
    if (res !== null) {
      const value = JSON.parse(res);
      this.setState({phone: value.phone});
    }
  };
  subscribeLocationLocation = () => {
    Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        // setLocationStatus('You are Here');
        console.log(position, 'pos');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        this.getCityInfo(currentLongitude, currentLatitude);
        //Setting Longitude state
        // this.setState({currentLongitude: currentLongitude});

        //Setting Latitude state
        // this.setState({currentLatitude: currentLatitude});
      },
      error => {
        // setLocationStatus(error.message);
        console.log(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  getOneTimeLocation = () => {
    // setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        // setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        this.getCityInfo(currentLongitude, currentLatitude);
        //Setting Longitude state
        // this.setState({currentLongitude: currentLongitude});

        //Setting Longitude state
        // this.setState({currentLatitude: currentLatitude});
      },
      error => {
        // setLocationStatus(error.message);
        console.log(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      this.getOneTimeLocation();
      this.subscribeLocationLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          this.getOneTimeLocation();
          this.subscribeLocationLocation();
        } else {
          // setLocationStatus('Permission Denied');
          console.log('permisson denied');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  allowHandler = async () => {
    await this.requestLocationPermission();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image source={require('../assets/map.png')} />
          <Text style={styles.allow}>Allow Location</Text>
          <Text style={styles.textTwo}>
            We need your Permeission to access your location
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.allowHandler()}>
            <Text style={styles.logText}>ALLOW LOCATION</Text>
          </TouchableOpacity>
          <Text style={styles.dont}>Don't Allow</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dont: {
    color: '#161A1D',
    alignSelf: 'center',
    marginTop: '3%',
    fontSize: 18,
    fontWeight: '700',
  },
  logText: {fontSize: 20, color: 'white', fontWeight: '600'},
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#94CD00',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
  },
  bottomView: {width, height: '20%'},
  allow: {
    color: '#161A1D',
    fontSize: 24,
    fontWeight: '700',
    marginTop: '6%',
  },
  textTwo: {
    color: '#A2A3A5',
    fontSize: 18,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '2%',
  },
  container: {width, height, backgroundColor: 'white'},
  topView: {
    width,
    height: '80%',
    alignItems: 'center',
    paddingTop: '26%',
    // backgroundColor: 'pink',
  },
});
export default AllowLocation;
