import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

import Constants from '../shared/constants/constants';
import PropTypes from 'prop-types';
import {TodoShape} from '../shared/shape/shape';

const Todo = ({todo, onToggleTodo}) => {
  return (
    <View style={[styles.card, todo.isCompleted && styles.gray]}>
      <Text style={[styles.text, todo.isCompleted && styles.completed]}>
        {todo.name}
      </Text>
      <Button
        onPress={() => onToggleTodo(todo)}
        style={styles.button}
        title={todo.isCompleted ? Constants.UNDO : Constants.COMPLETE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 30,
  },
  completed: {
    flex: 1,
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
    color: 'gray',
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
  gray: {
    backgroundColor: '#d3d3d3',
  },
  button: {
    fontSize: 3,
  },
});

Todo.propTypes = {
  todo: TodoShape,
  onToggleTodo: PropTypes.func,
};

Todo.defaultProps = {
  todo: {},
  onToggleTodo: () => {},
};

export default Todo;
