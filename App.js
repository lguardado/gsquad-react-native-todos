import React from 'react';

import {StyleSheet, View} from 'react-native';

import TodosContainer from './containers/todosContainer';
import Header from './components/header';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TodosContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
