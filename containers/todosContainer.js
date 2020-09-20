import React, {useReducer, useState} from 'react';

import {StyleSheet, View, Text, Button, Alert} from 'react-native';

import TodosList from '../components/todosList';
import AddTodoContainer from '../containers/addTodoContainer';
import constants from '../shared/constants/constants';
import reducer from '../store/reducer';
import ACTIONS from '../store/actions';

const TodosContainer = () => {
  const [isCheckingCompleted, setIsCheckingCompleted] = useState(false);
  const [todos, dispatch] = useReducer(reducer, {
    pending: [
      {name: 'Example todo! complete me >', isCompleted: false, id: '1'},
    ],
    completed: [],
  });

  const showAlert = () => {
    Alert.alert(
      constants.CLEAR_COMPLETED_TITLE,
      constants.CLEAR_CONFIRM_MESSAGE,
      [
        {
          text: constants.CANCEL,
          onPress: () => {},
        },
        {
          text: constants.OK,
          onPress: () => dispatch({type: ACTIONS.CLEAR_COMPLETED}),
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.flex1}>
      <View
        style={isCheckingCompleted ? styles.flex1 : styles.flex5}
        onTouchStart={() => setIsCheckingCompleted(false)}>
        <AddTodoContainer dispatch={dispatch} />
        {!todos.pending.length && (
          <Text style={[styles.title, styles.green]}>{constants.NO_TODOS}</Text>
        )}
        <TodosList todos={todos.pending} dispatch={dispatch} />
      </View>
      {!!todos.completed.length && (
        <View
          onTouchStart={() => setIsCheckingCompleted(true)}
          style={styles.completedSection}>
          <Text style={[styles.title, styles.completedTitle]}>
            {constants.DONE}
          </Text>
          <Button onPress={showAlert} title={constants.CLEAR_COMPLETED_TITLE} />
          <TodosList todos={todos.completed} dispatch={dispatch} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  green: {
    color: 'green',
  },
  completedSection: {
    flex: 1.8,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  completedTitle: {
    opacity: 0.5,
    fontSize: 25,
    textAlign: 'center',
  },
  flex1: {
    flex: 1,
  },
  flex5: {
    flex: 5,
  },
});

export default TodosContainer;
