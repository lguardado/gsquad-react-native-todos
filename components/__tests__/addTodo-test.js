import React from 'react';

import {TextInput, TouchableWithoutFeedback, Button} from 'react-native';
import renderer from 'react-test-renderer';
import constants from '../../shared/constants/constants';
import AddTodo from '../addTodo';

describe('Add Todo test', () => {
  it('renders AddTodo correctly', () => {
    renderer.create(<AddTodo isAdding={false} />);
  });

  describe('Add todo initial state', () => {
    const testInstance = renderer.create(<AddTodo isAdding={false} />).root;

    it('should show an input when is not adding', () => {
      expect(testInstance.findByType(TouchableWithoutFeedback)).toBeDefined();
    });
  });

  describe('Add todo adding state', () => {
    const testInstance = renderer.create(<AddTodo isAdding={true} />).root;
    it('sholud show an input when is adding a new todo', () => {
      testInstance.props.isAdding = true;
      expect(testInstance.findByType(TextInput)).toBeDefined();
    });

    it('sholud show 2 buttons when is adding a new todo', () => {
      testInstance.props.isAdding = true;
      expect(testInstance.findAllByType(Button).length).toBe(2);
    });

    it('sholud have and add and a cancel button', () => {
      testInstance.props.isAdding = true;
      expect(testInstance.findAllByType(Button)[0].props.title).toBe(
        constants.ADD,
      );
      expect(testInstance.findAllByType(Button)[1].props.title).toBe(
        constants.CANCEL,
      );
    });
  });
});
