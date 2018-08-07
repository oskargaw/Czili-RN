import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
