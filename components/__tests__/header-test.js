import React from 'react';

import {Text, Image} from 'react-native';
import renderer from 'react-test-renderer';
import Header from '../header';
import constants from '../../shared/constants/constants';

describe('Header test', () => {
  it('renders Header correctly', () => {
    renderer.create(<Header />);
  });

  describe('Initial state', () => {
    const testInstance = renderer.create(<Header />).root;
    it('should show a title', () => {
      expect(testInstance.findByType(Text)).toBeDefined();
    });

    it('should have the expected title text', () => {
      expect(testInstance.findByType(Text).props.children).toMatch(
        constants.TODO_LIST,
      );
    });

    it('should show a logo', () => {
      expect(testInstance.findByType(Image)).toBeDefined();
    });
  });
});
