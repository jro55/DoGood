/**
 * Copyright JRoCoCo, 2017 All Rights Reserved
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './App/Components/Navigator/Navigator';

export default class App extends React.Component {
  render() {
    return <Navigator />;
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
