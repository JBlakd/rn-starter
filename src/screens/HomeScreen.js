import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = function(props) {
  // console.log(props);

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={function() {
          return props.navigation.navigate('Components');
        }}
        title="Go to Components Screen"
      />
      <Button
        onPress={function() {
          return props.navigation.navigate('List');
        }}
        title="Go to List Screen"
      />
      <Button
        onPress={function() {
          return props.navigation.navigate('Image');
        }}
        title="Go to Image Screen"
      />
      <Button
        onPress={function() {
          return props.navigation.navigate('Counter');
        }}
        title="Go to Counter Screen"
      />
      <Button
        onPress={function() {
          return props.navigation.navigate('Colour');
        }}
        title="Go to Colour Screen"
      />
      <Button
        onPress={function() {
          return props.navigation.navigate('Square');
        }}
        title="Go to Square Screen"
      />
      <Button
        onPress={function() {
          return props.navigation.navigate('Text');
        }}
        title="Go to Text Screen"
      />
      <Button
        onPress={function() {
          return props.navigation.navigate('Box');
        }}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
