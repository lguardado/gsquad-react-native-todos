import React from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';
import logo from '../assets/img/logo.png';
import Constants from '../shared/constants/constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>{Constants.TODO_LIST}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#1d3761',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Arial',
    height: 70,
    marginTop: 120,
    textAlign: 'center',
  },
  logo: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 220,
    paddingVertical: 0,
    marginVertical: 0,
    alignSelf: 'center',
    paddingTop: 220,
    paddingBottom: 0,
  },
});

export default Header;
