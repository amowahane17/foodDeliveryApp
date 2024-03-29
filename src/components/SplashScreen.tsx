import {Image, ImageBackground, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {height, width} from '../constants/ScreenDimentions';
import {LoginContext} from '../GlobalState';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface SplashScreenProps {
  navigation?: any;
}
interface SplashScreenState {}
export class SplashScreen extends Component<
  SplashScreenProps,
  SplashScreenState
> {
  static contextType = LoginContext;
  componentDidMount = async () => {
    try {
      const userData = await AsyncStorage.getItem('USER_DATA');
      setTimeout(() => {
        userData === null
          ? this.props.navigation.navigate('Onbording')
          : this.props.navigation.navigate('Tabs');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require('../assets/backImg.png')}>
        <Image
          style={styles.imgOne}
          source={require('../assets/splashImgOne.png')}
        />
        <Image
          style={styles.imgTwo}
          source={require('../assets/splashImgTwo.png')}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  imgTwo: {marginBottom: '40%'},
  imgOne: {marginBottom: '6%', marginRight: '14%'},
  container: {height, width, justifyContent: 'center', alignItems: 'center'},
});
export default SplashScreen;
