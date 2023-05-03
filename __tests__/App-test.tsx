import {render} from '@testing-library/react-native';
import App from '../App';
import 'react-native-gesture-handler/jestSetup';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from '../src/navigations/AuthNav';

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
