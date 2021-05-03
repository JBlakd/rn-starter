import React, { useReducer } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import ColourCounter from '../components/ColourCounter'

const COLOUR_INCREMENT = 10;

const reducer = function(state, action) {
  // state == {red: number, green: number, blue: number}
  // action == {colorToChange: 'red' || 'green' || 'blue', amount: 15 || 15}
  switch (action.colourToChange) {
    case 'red':
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return {...state, red: state.red + action.amount};
    case 'green':
      if (state.green + action.amount > 255 || state.green + action.amount < 0) {
        return state;
      }
      return {...state, green: state.green + action.amount};
    case 'blue':
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

const SquareScreen = function() {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // console.log("Red " + red);
  // console.log("Green  " + green);
  // console.log("Blue  " + blue);

  // const setColour = function(colour, change) {
  //   if (colour === 'red') {
  //     if (red + change > 255 || red + change < 0) {
  //       return;
  //     } else {
  //       setRed(red + change);
  //     }
  //   } else if (colour === 'green') {
  //     if (green + change > 255 || green + change < 0) {
  //       return;
  //     } else {
  //       setGreen(green + change);
  //     }
  //   } else if (colour === 'blue') {
  //     if (blue + change > 255 || blue + change < 0) {
  //       return;
  //     } else {
  //       setBlue(blue + change);
  //     }
  //   } else {
  //     return;
  //   }
  // }

  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});

  return (
    <View>
      <ColourCounter
        onIncrease={ function() {
          // setColour('red', COLOUR_INCREMENT);
          dispatch({ colourToChange: 'red', amount: COLOUR_INCREMENT });
        }}
        onDecrease={ function() {
          // setColour('red', -1 * COLOUR_INCREMENT);
          dispatch({ colourToChange: 'red', amount: -1 * COLOUR_INCREMENT });
        }}
        colour="Red"
      />
      <ColourCounter
        onIncrease={ function() {
          // setColour('green', COLOUR_INCREMENT);
          dispatch({ colourToChange: 'green', amount: COLOUR_INCREMENT });
        }}
        onDecrease={ function() {
          // setColour('green', -1 * COLOUR_INCREMENT);
          dispatch({ colourToChange: 'green', amount: -1 * COLOUR_INCREMENT });
        }}
        colour="Green"
      />
      <ColourCounter
        onIncrease={ function() {
          // setColour('blue', COLOUR_INCREMENT);
          dispatch({ colourToChange: 'blue', amount: COLOUR_INCREMENT });
        }}
        onDecrease={ function() {
          // setColour('blue', -1 * COLOUR_INCREMENT);
          dispatch({ colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT });
        }}
        colour="Blue"
      />
      <View
        style={
          {
            height: 150,
            width: 150,
            backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
          }
        }
      />
      <Text>Red: {state.red}, Green: {state.green}, Blue: {state.blue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;
