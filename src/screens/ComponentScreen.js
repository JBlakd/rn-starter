import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const ComponentsScreen = function() {
  // const helloWorldString = ["Hello", "World!"];
  const nameString = "Ivan";

  // A component is a function that returns some JSX, which is similar to HTML
  return (
    <View>
      <Text style={styles.headerTextStyle}>Getting started with React Native!</Text>
      <Text style={styles.subheaderTextStyle}>My name is { nameString }.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 45
    // color: red
  },
  subheaderTextStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
