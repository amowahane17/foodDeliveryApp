import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import SplashScreen from '../components/SplashScreen';
import Onbording from '../screens/auth/Onbording';
import AllowLocation from '../components/AllowLocation';
import Register from '../screens/auth/Register';
import Otp from '../screens/auth/Otp';
import TabNav from './TabNav';
import Profile from '../screens/home/Profile';
import Order from '../screens/home/profilePages/Order';
import EditProfile from '../screens/home/profilePages/EditProfile';
import Favorite from '../screens/home/profilePages/Favorite';
import SingleItems from '../screens/home/homePages/SingleItems';
import ItemInfo from '../screens/home/homePages/ItemInfo';
import OfferItems from '../screens/home/homePages/OfferItems';

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
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="SingleItems" component={SingleItems} />
        <Stack.Screen name="ItemInfo" component={ItemInfo} />
        <Stack.Screen name="OfferItems" component={OfferItems} />
      </Stack.Navigator>
    );
  }
}

export default AuthNav;
