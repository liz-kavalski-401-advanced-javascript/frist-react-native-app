import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RandomStr from './component/randomString.js'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Just shake!</Text> */}
      <RandomStr/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:12,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
