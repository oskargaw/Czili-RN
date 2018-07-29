import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class HorizontalScrollView extends Component {
  render() {
    return (
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
        <View style={styles.screenOneContainerStyle}>
          <Text style={styles.screenTextStyle}>Screen 1</Text>
        </View>
        <View style={styles.screenTwoContainerStyle}>
          <Text style={styles.screenTextStyle}>Screen 2</Text>
        </View>
        <View style={styles.screenThreeContainerStyle}>
          <Text style={styles.screenTextStyle}>Screen 3</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screenOneContainerStyle: {
    flex: 1,
    backgroundColor: '#5f9ea0',
    marginTop: 20,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTwoContainerStyle: {
    flex: 1,
    backgroundColor: 'tomato',
    marginTop: 20,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenThreeContainerStyle: {
    flex: 1,
    backgroundColor: '#663399',
    marginTop: 20,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTextStyle: {
    fontSize: 20,
    padding: 15,
    color: 'white',
    textAlign: 'center',
  },
});
