import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Login from '../src/screens/auth/Login';
import {Alert} from 'react-native';

jest.mock('react-native-phone-number-input', () => 'PhoneInput');
jest.mock('@twotalltotems/react-native-otp-input', () => 'OTPInputView');
describe('Login Component', () => {
  test('Login renders correctly', () => {
    const loginRender = render(<Login />);
    expect(loginRender).toBeDefined();
  });
  test('Login Button on Invalid validations', () => {
    const navigation = {navigate: jest.fn()};
    const loginRender = render(<Login navigation={navigation} />);
    const loginBtn = loginRender.getByTestId('loginBtn');
    const aleartSpy = jest.spyOn(Alert, 'alert');
    fireEvent.press(loginBtn);
    expect(aleartSpy).toHaveBeenCalledWith('Please Enter Valid Information');
  });
  test('Login Button on valid validations', () => {
    const navigation = {navigate: jest.fn()};
    const loginRender = render(<Login navigation={navigation} />);
    const loginBtn = loginRender.getByTestId('loginBtn');
    const phoneInputLogin = loginRender.getByTestId('phoneInputLogin');
    phoneInputLogin.props.onChangeText('9172695965');
    const passcode = loginRender.getByTestId('passcode');
    const password = '123456';
    passcode.props.onCodeChanged(password);
    fireEvent.press(loginBtn);
  });
  test('customer & seller button should work', () => {
    const loginRender = render(<Login />);
    const customerBtn = loginRender.getByTestId('customerBtn');
    const sellerBtn = loginRender.getByTestId('sellerBtn');
    fireEvent.press(customerBtn);
    fireEvent.press(sellerBtn);
  });
  test('Register text button should work', () => {
    const navigation = {navigate: jest.fn()};
    const loginRender = render(<Login navigation={navigation} />);
    const registerText = loginRender.getByTestId('registerText');
    fireEvent.press(registerText);
  });
});
