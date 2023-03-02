import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import HappyScreen from "./screens/HappyScreen";
import SadScreen from './screens/SadScreen';
import AngryScreen from './screens/AngryScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HappyScreen" component={HappyScreen} />
      <Stack.Screen name="SadScreen" component={SadScreen} />
      <Stack.Screen name="AngryScreen" component={AngryScreen} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
