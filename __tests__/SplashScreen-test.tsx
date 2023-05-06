import {render} from '@testing-library/react-native';
import SplashScreen from '../src/components/SplashScreen';
import React from 'react';
describe('SplashScreen Component', () => {
  it('SplashScreen should render', () => {
    render(<SplashScreen />);
  });
  test('setTimout should work', () => {
    jest.useFakeTimers();
    const navigation = {navigate: jest.fn()};
    render(<SplashScreen navigation={navigation} />);
    jest.advanceTimersByTime(2000);
  });
});
