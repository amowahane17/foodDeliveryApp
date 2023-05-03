import {render} from '@testing-library/react-native';
import App from '../App';

describe('App component', () => {
  test('App component should render', () => {
    const appRender = render(<App />);
    expect(appRender).toBeDefined();
  });
  test('setTimeout', () => {
    jest.useFakeTimers();
    render(<App />);
    jest.advanceTimersByTime(3000);
  });
});
