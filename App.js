import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from './screens/Homescreen';
import CaluculatorScreen from './screens/CaluculatorScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />

       </View>
  
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  CaluculatorScreen: CaluculatorScreen,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aquamarine',
    flex: 1,
  },

  display: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#6B5B95',
    width: '70%',
    height: '10%',
    borderRadius: 25,
    textAlign: 'center',
  },

  calcKeyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});
