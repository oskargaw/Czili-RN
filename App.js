import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import CardsScreen from './screens/CardsScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

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
    const mainScreen =
      currentState === 'Splash' ? <Splash /> : <WelcomeScreen />;

    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: TabNavigator(
            {
              map: { screen: MapScreen },
              cards: { screen: CardsScreen },
              review: {
                screen: StackNavigator({
                  review: { screen: ReviewScreen },
                  settings: { screen: SettingsScreen },
                }),
              },
            },
            {
              tabBarPosition: 'bottom',
              swipeEnabled: false,
              animationEnabled: false,
              tabBarOptions: {
                labelStyle: { fontSize: 10 },
                showIcon: true,
                style: { height: 60 },
              },
            },
          ),
        },
      },
      {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        lazy: true,
      },
    );
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
});
