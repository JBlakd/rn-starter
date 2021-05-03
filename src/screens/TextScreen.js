import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = function() {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={function(newValue) {
          setName(newValue);
        }}
      />
      <Text>Your name is: {name}</Text>
      {(name.length <= 3) ? <Text>Your name must be longer than 3 letters.</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    paddingLeft: 10
  }
});

export default TextScreen;
