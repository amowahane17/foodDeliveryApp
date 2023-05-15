import {render} from '@testing-library/react-native';
import App from '../App';
import 'react-native-gesture-handler/jestSetup';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from '../src/navigations/AuthNav';
import React from 'react';

jest.mock('react-native-phone-number-input', () => 'PhoneInput');
jest.mock('@twotalltotems/react-native-otp-input', () => 'OTPInputView');
jest.mock('react-native-select-dropdown', () => 'SelectDropdown');

describe('App component', () => {
  test('App component should render', () => {
    const appRender = render(<App />);
    expect(appRender).toBeDefined();
  });
  test('navs', () => {
    const component = (
      <NavigationContainer>
        <AuthNav />
      </NavigationContainer>
    );
    render(component);
  });
});
