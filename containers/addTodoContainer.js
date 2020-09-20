import React, {useState} from 'react';

import ACTIONS from '../store/actions';
import AddTodo from '../components/addTodo';

const AddTodoContainer = ({dispatch}) => {
  const [name, setName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const toggleAdding = () => {
    console.log('togle');
    setIsAdding(!isAdding);
  };

  const onAddPress = () => {
    setIsAdding(false);
    return dispatch({type: ACTIONS.ADD_TODO, payload: name});
  };

  const onChangeText = (text) => setName(text);

  return (
    <AddTodo
      isAdding={isAdding}
      toggleAdding={toggleAdding}
      onAddPress={onAddPress}
      onChangeText={onChangeText}
    />
  );
};

export default AddTodoContainer;
