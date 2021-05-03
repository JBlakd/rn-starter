import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColourScreen = function () {
  const [colours, setColours] = useState([]);
  // console.log(colours);

  return (
    <View>
      <Button
        title="Add a Colour"
        onPress = {
          function() {
            setColours([...colours, randomRgb()]);
          }
        }
      />
      <FlatList
        keyExtractor={
          function(item) {
            return item;
          }
        }
        data={colours}
        renderItem={
          function({ item }) {
            return <View
              style={
                {
                  height: 100,
                  width: 100,
                  backgroundColor: item
                }
              }
            />
          }
        }
      />
    </View>
  );
}

const randomRgb = function() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColourScreen;
