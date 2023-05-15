import 'react-native-gesture-handler';
import React, {Component} from 'react';
import AuthNav from './src/navigations/AuthNav';
import {NavigationContainer} from '@react-navigation/native';
import PhoneSignIn from './src/PhoneAuth';
import New from './src/New';
import GlobalState from './src/GlobalState';
interface AppProps {}
interface AppState {}

export class App extends Component<AppProps, AppState> {
  render() {
    return (
      <GlobalState>
        <NavigationContainer>
          <AuthNav />
        </NavigationContainer>
      </GlobalState>
    );
  }
}

export default App;
