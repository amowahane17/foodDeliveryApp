import 'react-native-gesture-handler';
import React, {Component} from 'react';
import AuthNav from './src/navigations/AuthNav';
import {NavigationContainer} from '@react-navigation/native';

interface AppProps {}
interface AppState {}

export class App extends Component<AppProps, AppState> {
  render() {
    return (
      <NavigationContainer>
        <AuthNav />
      </NavigationContainer>
    );
  }
}

export default App;
