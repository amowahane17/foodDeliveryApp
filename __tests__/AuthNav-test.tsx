import {render} from '@testing-library/react-native';
import AuthNav from '../src/navigations/AuthNav';
jest.mock('@twotalltotems/react-native-otp-input', () => 'OTPInputView');
describe('AuthNav component', () => {
  test('Auth component should render', () => {
    render(<AuthNav />);
  });
});
