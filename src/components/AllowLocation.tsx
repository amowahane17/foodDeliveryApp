import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, width} from '../constants/ScreenDimentions';
export class AllowLocation extends Component {
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
          <TouchableOpacity style={styles.btn}>
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
