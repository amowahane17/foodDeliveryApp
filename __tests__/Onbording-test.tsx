import {fireEvent, render} from '@testing-library/react-native';
import Onbording from '../src/screens/auth/Onbording';
import React from 'react';

describe('Onbording component', () => {
  test('Onbording component should render', () => {
    const onbordingRender = render(<Onbording />);
    expect(onbordingRender).toBeDefined();
  });
  test('Next button should work', () => {
    const navigation = {navigate: jest.fn()};
    const onbordingRender = render(<Onbording navigation={navigation} />);
    const next_btn = onbordingRender.getByTestId('next_btn');
    expect(next_btn).toBeDefined();
    fireEvent.press(next_btn);
    fireEvent.press(next_btn);
    fireEvent.press(next_btn);
    fireEvent.press(next_btn);
  });
  test('skip button should worwk', () => {
    const navigation = {navigate: jest.fn()};
    const onbordingRender = render(<Onbording navigation={navigation} />);
    const next_btn = onbordingRender.getByTestId('next_btn');
    const skipBtn = onbordingRender.getByTestId('skipBtn');
    expect(next_btn).toBeDefined();
    fireEvent.press(skipBtn);
    fireEvent.press(next_btn);
  });
});
