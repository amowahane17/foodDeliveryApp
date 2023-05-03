import {fireEvent, render} from '@testing-library/react-native';
import Onbording from '../src/components/Onbording';

describe('Onbording component', () => {
  test('Onbording component should render', () => {
    const onbordingRender = render(<Onbording />);
    expect(onbordingRender).toBeDefined();
  });
  test('Next button should work', () => {
    const onbordingRender = render(<Onbording />);
    const next_btn = onbordingRender.getByTestId('next_btn');
    expect(next_btn).toBeDefined();
    fireEvent.press(next_btn);
    fireEvent.press(next_btn);
    fireEvent.press(next_btn);
    fireEvent.press(next_btn);
  });
  // test('setInterval', () => {
  //   jest.useFakeTimers();
  //   render(<Onbording />);
  //   jest.advanceTimersByTime(2000);
  //   jest.advanceTimersByTime(2000);
  //   jest.advanceTimersByTime(2000);
  //   jest.advanceTimersByTime(2000);
  // });
});
