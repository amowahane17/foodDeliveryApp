import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/Login';
import SplashScreen from '../components/SplashScreen';
import Onbording from '../components/Onbording';
import AllowLocation from '../components/AllowLocation';
import Register from '../components/Register';
import Otp from '../components/Otp';
const Stack = createStackNavigator();

export class AuthNav extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Location" component={AllowLocation} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    );
  }
}

export default AuthNav;
