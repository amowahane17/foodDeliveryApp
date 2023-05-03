import {render} from '@testing-library/react-native';
import SplashScreen from '../src/components/SplashScreen';
describe('SplashScreen Component', () => {
  it('SplashScreen should render', () => {
    render(<SplashScreen />);
  });
  test('setTimout should work', () => {
    jest.useFakeTimers();
    render(<SplashScreen />);
    jest.advanceTimersByTime(2000);
    jest.advanceTimersByTime(2000);
  });
});
