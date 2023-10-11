import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen() {
  // const [colorArray, setColorArray] = useState([
  //   { red: 255, green: 0, blue: 0, id: "0" },
  //   { red: 0, green: 255, blue: 0, id: "1" },
  //   { red: 0, green: 0, blue: 255, id: "2" },
  // ]);

  // For starting with no colours on the screen.
  const [colorArray, setColorArray] = useState([]);

  function resetColors() {
    setColorArray([]);
  }

  // Note that this renderItem() is inside HomeScreen().
  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`,
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={{ height: 40, justifyContent: "center" }}
        onPress={addColor}
      >
        <Text style={{ color: "red" }}>Add colour</Text>
      </Pressable>
      <Pressable
        style={{ height: 40, justifyContent: "center" }}
        onPress={resetColors}
      >
        <Text style={{ color: "red" }}>Reset</Text>
      </Pressable>
      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Colour List" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
