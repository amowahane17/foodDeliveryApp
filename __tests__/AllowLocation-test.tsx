import React from 'react';
import {render} from '@testing-library/react-native';
import AllowLocation from '../src/components/AllowLocation';

describe('Allow Location component', () => {
  test('Allow Location should render', () => {
    const locRender = render(<AllowLocation />);
    expect(locRender).toBeDefined();
  });
});
