import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import SplashScreen from '../components/SplashScreen';
import Onbording from '../screens/auth/Onbording';
import AllowLocation from '../components/AllowLocation';
import Register from '../screens/auth/Register';
import Otp from '../screens/auth/Otp';
import TabNav from './TabNav';

const Stack = createStackNavigator();

export class AuthNav extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Location" component={AllowLocation} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Tabs" component={TabNav} />
      </Stack.Navigator>
    );
  }
}

export default AuthNav;
