import React from 'react';

import {Button, View} from 'react-native';
import renderer from 'react-test-renderer';
import Todo from '../todo';
import constants from '../../shared/constants/constants';

describe('Todo test', () => {
  const pendingTodo = {name: 'foo', isCompleted: false, id: '1'};
  const completedTodo = {name: 'bar', isCompleted: true, id: '2'};
  it('renders Todo correctly', () => {
    renderer.create(<Todo todo={pendingTodo} />);
  });

  describe('Test pending todo', () => {
    const testInstance = renderer.create(<Todo todo={pendingTodo} />).root;

    it('should show the complete action when the Todo is pending', () => {
      expect(testInstance.findByType(Button).props.title).toBe(
        constants.COMPLETE,
      );
    });

    it('should not have completed styles', () => {
      expect(testInstance.findByType(View).props.style[1]).toBeFalsy();
    });
  });

  describe('Test Completed todo', () => {
    const testInstance = renderer.create(<Todo todo={completedTodo} />).root;

    it('should show the undo action when the Todo is pending', () => {
      expect(testInstance.findByType(Button).props.title).toBe(constants.UNDO);
    });

    it('should have completed styles', () => {
      expect(testInstance.findByType(View).props.style).toContainEqual({
        backgroundColor: '#d3d3d3',
      });
    });
  });
});
