import React, {useState} from 'react';

import ACTIONS from '../store/actions';
import AddTodo from '../components/addTodo';

const AddTodoContainer = ({dispatch}) => {
  const [name, setName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const toggleAdding = () => {
    setIsAdding(!isAdding);
  };

  const onAddPress = () => {
    setIsAdding(false);
    dispatch({type: ACTIONS.ADD_TODO, payload: name});
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
