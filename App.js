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
      <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ title: 'Home' }}
      />
      <Stack.Screen 
      name="HappyScreen" 
      component={HappyScreen}
      options={{ title: 'Mood: Happy' }}
       />
      <Stack.Screen 
      name="SadScreen" 
      component={SadScreen} 
      options={{ title: 'Mood: Sad' }}
      />
      <Stack.Screen 
      name="AngryScreen" 
      component={AngryScreen} 
      options={{ title: 'Mood: Angry' }}
      />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
