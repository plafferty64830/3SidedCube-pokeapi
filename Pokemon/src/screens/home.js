import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke'
    }
  });