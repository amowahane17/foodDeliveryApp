import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Search from '../screens/home/Search';
import Cart from '../screens/home/Cart';
import Offer from '../screens/home/Offer';

const Tab = createBottomTabNavigator();
export class TabNav extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Offer" component={Offer} />
      </Tab.Navigator>
    );
  }
}

export default TabNav;
