import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Register from '../src/screens/auth/Register';
jest.mock('react-native-phone-number-input', () => 'PhoneInput');
jest.mock('@twotalltotems/react-native-otp-input', () => 'OTPInputView');
jest.mock('react-native-select-dropdown', () => 'SelectDropdown');
describe('Register component', () => {
  test('Register should render', () => {
    render(<Register />);
  });
  test('goBack button', () => {
    const navigation = {goBack: jest.fn()};
    const regRender = render(<Register navigation={navigation} />);
    const goBackBtn = regRender.getByTestId('goBackBtn');
    fireEvent.press(goBackBtn);
  });
  test('name input field', () => {
    const regRender = render(<Register />);
    const input = regRender.getByPlaceholderText('name');
    fireEvent.changeText(input, 'Name');
  });
  test('email input field', () => {
    const regRender = render(<Register />);
    const input = regRender.getByPlaceholderText('email Id');
    fireEvent.changeText(input, 'Name');
  });
  test('tickBtn should work', () => {
    const regRender = render(<Register />);
    const tickBtn = regRender.getByTestId('tickBtn');
    fireEvent.press(tickBtn);
  });
  test('registerBtn should work', () => {
    const regRender = render(<Register />);
    const registerBtn = regRender.getByTestId('registerBtn');
    fireEvent.press(registerBtn);
  });
  test('regBtn with correct validations', () => {
    const navigation = {navigate: jest.fn()};
    const regRender = render(<Register navigation={navigation} />);
    const registerBtn = regRender.getByTestId('registerBtn');
    const tickBtn = regRender.getByTestId('tickBtn');
    const name = regRender.getByPlaceholderText('name');
    const phoneInputReg = regRender.getByTestId('phoneInputReg');
    const passcodeReg = regRender.getByTestId('passcodeReg');
    const confPasscodeReg = regRender.getByTestId('confPasscodeReg');
    const stateSelect = regRender.getByTestId('stateSelect');
    const email = regRender.getByPlaceholderText('email Id');
    fireEvent.changeText(name, 'Name');
    fireEvent.changeText(email, 'example@gmail.com');
    phoneInputReg.props.onChangeText('9172695965');
    passcodeReg.props.onCodeChanged('123456');
    confPasscodeReg.props.onCodeChanged('123456');
    stateSelect.props.onSelect('Telangana');
    stateSelect.props.buttonTextAfterSelection('Telangana');
    stateSelect.props.rowTextForSelection('Telangana');
    stateSelect.props.renderDropdownIcon('');
    fireEvent.press(tickBtn);
    fireEvent.press(registerBtn);
  });
  test('regBtn with incorrect validations', () => {
    const regRender = render(<Register />);
    const registerBtn = regRender.getByTestId('registerBtn');
    const tickBtn = regRender.getByTestId('tickBtn');
    const name = regRender.getByPlaceholderText('name');
    const phoneInputReg = regRender.getByTestId('phoneInputReg');
    const passcodeReg = regRender.getByTestId('passcodeReg');
    const confPasscodeReg = regRender.getByTestId('confPasscodeReg');
    const stateSelect = regRender.getByTestId('stateSelect');
    const email = regRender.getByPlaceholderText('email Id');
    fireEvent.changeText(name, 'e');
    fireEvent.changeText(email, 'examplegmail.com');
    phoneInputReg.props.onChangeText('915965');
    passcodeReg.props.onCodeChanged('12456');
    confPasscodeReg.props.onCodeChanged('1234');
    stateSelect.props.onSelect('');
    stateSelect.props.buttonTextAfterSelection('Telangana');
    stateSelect.props.rowTextForSelection('Telangana');
    stateSelect.props.renderDropdownIcon('');
    fireEvent.press(tickBtn);
    fireEvent.press(registerBtn);
  });
});
