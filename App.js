import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RandomStr from './component/randomString.js'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Just shake!</Text>
      <RandomStr/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
