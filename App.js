import React from 'react';
import { View,StyleSheet } from 'react-native';

import CurrentWeather from './src/Components/CurrentWeather';
export default function App() {

  return (
    <View style={styles.container}>
  <CurrentWeather/>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});