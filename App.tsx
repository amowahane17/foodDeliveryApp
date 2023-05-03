import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from './src/components/SplashScreen';
import Onbording from './src/components/Onbording';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Login';
interface AppProps {}
interface AppState {}
const Stack = createStackNavigator();
export class App extends Component<AppProps, AppState> {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Login">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Onbording" component={Onbording} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
