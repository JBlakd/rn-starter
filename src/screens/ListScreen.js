import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = function() {
  const friends = [
      { name: 'Friend #1', age: '23'},
      { name: 'Friend #2', age: '13'},
      { name: 'Friend #3', age: '43'},
      { name: 'Friend #4', age: '66'},
      { name: 'Friend #5', age: '8'},
      { name: 'Friend #6', age: '32'},
      { name: 'Friend #7', age: '11'},
      { name: 'Friend #8', age: '23'},
      { name: 'Friend #9', age: '7'}
  ];

  return (
    <FlatList
      // horizontal
      keyExtractor={function(friend) {
        return friend.name;
      }}
      data={friends}
      renderItem={function({ item }) {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    // fontSize: 50,
    marginVertical: 50,
    flex: 1
  }
});

export default ListScreen;
