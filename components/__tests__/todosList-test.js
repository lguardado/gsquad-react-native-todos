import React from 'react';

import {FlatList} from 'react-native';
import renderer from 'react-test-renderer';
import TodosList from '../todosList';

describe('TodosList test', () => {
  const todos = [
    {name: 'foo', isCompleted: false, id: '1'},
    {name: 'bar', isCompleted: false, id: '2'},
  ];
  it('renders TodosList correctly', () => {
    renderer.create(<TodosList todos={todos} />);
  });

  describe('Test list', () => {
    const testInstance = renderer.create(<TodosList todos={todos} />).root;

    it('should have a flat list with 2 items', () => {
      expect(testInstance.findByType(FlatList)).toBeDefined();
      expect(testInstance.findByType(FlatList).props.data).toHaveLength(2);
    });

    const testEmptyInstance = renderer.create(<TodosList todos={[]} />).root;
    it('should have a flat list with 0 items', () => {
      expect(testEmptyInstance.findByType(FlatList)).toBeDefined();
      expect(testEmptyInstance.findByType(FlatList).props.data).toHaveLength(0);
    });
  });
});
