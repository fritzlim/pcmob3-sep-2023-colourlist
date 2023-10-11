import React from "react";
import { View, Text } from "react-native";

export default function BlockRGB(props) {
  // **** Demo of string interpolation ****
  // The messages will only be shown when a BlockRGB component is rendered,
  // i.e. only when the "Add colour" button is clicked.
  const message = `The value of the red prop is${props.red}`;
  const message2 = "The value of the red prop is " + props.red;
  // Output: The value of the red prop is 123
  console.log(message);
  console.log(message2);
  // **************************************

  return (
    <View
      style={{
        backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`, // Expects a hex value as a string.
        padding: 30,
        width: "100%",
      }}
    ></View>
  );
}
