import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
