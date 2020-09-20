import React from 'react';

import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Constants from '../shared/constants/constants';

const AddTodo = ({onAddPress, toggleAdding, onChangeText, isAdding}) => {
  let renderAddTodo = () => (
    <View>
      <TextInput
        autoFocus={true}
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={Constants.WRITE_A_TASK}
      />
      <View style={styles.actions}>
        <Button
          onPress={onAddPress}
          style={styles.button}
          title={Constants.ADD}
        />
        <Button
          onPress={toggleAdding}
          style={styles.button}
          title={Constants.CANCEL}
        />
      </View>
    </View>
  );

  if (!isAdding) {
    renderAddTodo = () => (
      <TouchableWithoutFeedback onPress={toggleAdding}>
        <Text style={[styles.card, styles.newTodo]}>{Constants.ADD_NEW}</Text>
      </TouchableWithoutFeedback>
    );
  }

  return renderAddTodo();
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: '100%',
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
  },
  input: {
    borderColor: 'black',
    paddingHorizontal: 2,
    borderBottomWidth: 0.5,
    height: 50,
    fontSize: 20,
    marginHorizontal: 20,
  },
  newTodo: {
    textAlign: 'center',
    opacity: 0.5,
    fontSize: 20,
  },
  actions: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    fontSize: 3,
  },
});

AddTodo.propTypes = {
  onAddPress: PropTypes.func,
  toggleAdding: PropTypes.func,
  onChangeText: PropTypes.func,
  isAdding: PropTypes.bool,
};

AddTodo.defaultProps = {
  onAddPress: () => {},
  toggleAdding: () => {},
  onChangeText: () => {},
  isAdding: PropTypes.bool,
};

export default AddTodo;
