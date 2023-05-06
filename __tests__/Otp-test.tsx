import React from 'react';
import {render} from '@testing-library/react-native';
import Otp from '../src/screens/auth/Otp';
jest.mock('@twotalltotems/react-native-otp-input', () => 'OTPInputView');
describe('Otp component', () => {
  test('Otp should render', () => {
    const otpRender = render(<Otp />);
    expect(otpRender).toBeDefined();
  });
});
