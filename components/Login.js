import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../images/chili.png')}
              />
              <Text style={styles.title}>Account Information</Text>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter username/email"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  secureTextEntry
                  ref={'txtPassword'}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{ alignSelf: 'center' }}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f7c744',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255, 255, 255,0.2)',
    color: '#FFF',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32,53,70)',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
