/**
 * Copyright JRoCoCo, 2017 All Rights Reserved
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './App/Components/Router/Router';

export default class App extends React.Component {
  render() {
    return <Router />;
    // return (
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <Text>Yo</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
