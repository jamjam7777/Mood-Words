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
      options={{ 
        title: '',
        headerStyle: {
          backgroundColor: "#ffefd5",
        },
      }}
      />
      <Stack.Screen 
      name="HappyScreen" 
      component={HappyScreen}
      options={{ 
        title: 'Mood: Happy', 
        headerStyle: {
          backgroundColor: "#ffefd5",
        },
      }}
       />
      <Stack.Screen 
      name="SadScreen" 
      component={SadScreen} 
      options={{ 
        title: 'Mood: Sad',
        headerStyle: {
          backgroundColor: "#ffefd5",
        },
      }}
      />
      <Stack.Screen 
      name="AngryScreen" 
      component={AngryScreen} 
      options={{ 
        title: 'Mood: Angry',
        headerStyle: {
          backgroundColor: "#ffefd5",
        },
      }}
      />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
