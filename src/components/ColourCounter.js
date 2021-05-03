import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColourCounter = function(props) {
  return (
    <View>
      <Text>{props.colour}</Text>
      <Button
        onPress={ function() { props.onIncrease() }}
        title={`Increase ${props.colour}`}
      />
      <Button
        onPress={ function() { props.onDecrease() }}
        title={`Decrease ${props.colour}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColourCounter;
