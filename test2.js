// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StepCounterScreen from './StepCounterScreen';

const test2 = () => {
  return (
    <View style={styles.container}>
      <StepCounterScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default test2;
