import React from 'react';

import {StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import {TodoShape} from '../shared/shape/shape';

import Todo from './todo';

const TodosList = ({todos, onToggleTodo}) => (
  <FlatList
    style={styles.pendingTodos}
    data={todos}
    renderItem={({item}) => (
      <Todo key={item.id} todo={item} onToggleTodo={onToggleTodo} />
    )}
  />
);

const styles = StyleSheet.create({
  pendingTodos: {
    flexGrow: 1,
    borderColor: 'black',
    paddingVertical: 20,
    marginVertical: 10,
  },
});

TodosList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape),
  onToggleTodo: PropTypes.func,
};

TodosList.defaultProps = {
  todos: [],
  onToggleTodo: () => {},
};

export default TodosList;
