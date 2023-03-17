import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD
// import { createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList } from '@react-navigation/drawer';
=======
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList } from '@react-navigation/drawer';
>>>>>>> refs/remotes/origin/main
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import HappyScreen from "./screens/HappyScreen";
import SadScreen from './screens/SadScreen';
import AngryScreen from './screens/AngryScreen';
import FavoritesScreen from "./screens/FavoritesScreen";




<<<<<<< HEAD
// const Drawer = createDrawerNavigator();
=======
const Drawer = createDrawerNavigator();
>>>>>>> refs/remotes/origin/main
const Stack = createStackNavigator();

export default function App()  {
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
    <Stack.Screen 
      name="FavoritesScreen" 
      component={FavoritesScreen} 
      options={{ 
        title: 'My Favorites',
        headerStyle: {
          backgroundColor: "#ffefd5",
        },
      }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
   }

   registerRootComponent(App);
  

<<<<<<< HEAD
  // const Home= () => {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Home" component={Home} />
  //       <Drawer.Screen name="Profile" component={Profile} />
  //       <Stack.Screen name="Settings" component={Settings} />
  //     </Drawer.Navigator>
  //   );
  // }
=======
  const Home= () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    );
  }
>>>>>>> refs/remotes/origin/main



  const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
  });


