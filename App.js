import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentState: 'Splash' };
    setTimeout(() => {
      this.setState({ currentState: 'Login' });
    }, 3000);
  }

  render() {
    const { currentState } = this.state;
    const mainScreen = currentState === 'Splash' ? <Splash /> : <Login />;
    return mainScreen;
  }
}
