import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const reducer = function(state, action) {
  // state == {counter: number}
  // action == {type: change_number, payload: 1}
  // console.log(action.payload);
  return {...state, counter: state.counter + action.payload};
};

const CounterScreen = function() {
  const [state, dispatch] = useReducer(reducer, {counter:0});

  return (
    <View>
      <Button
        title="Increase"
        onPress={ function() {
          dispatch({ change_number: 'counter', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={ function() {
          dispatch({ change_number: 'counter', payload: -1 });
        }}
      />
      <Text>Current Count: { state.counter }</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
