import React from 'react';

import {TextInput, TouchableWithoutFeedback} from 'react-native';
import renderer from 'react-test-renderer';
import AddTodo from '../addTodo';

describe('Add Todo test', () => {
  it('renders AddTodo correctly', () => {
    renderer.create(<AddTodo />);
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
  });
});
