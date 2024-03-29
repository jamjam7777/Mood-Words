import { StyleSheet, Text, View, Pressable } from "react-native";
import { Card } from "react-native-elements";
import {happyAffirm} from "../components/happyAffirm";
import { useState } from "react";

let selectedText;

let favoritesArr = [];

function pushFavorite(){
  // let favoriteText;
  // favoriteText = selectedText; 
  favoritesArr.push(selectedText)
  
  console.log(favoritesArr)
}

function randomHappy(happyAffirm) {

  selectedText = happyAffirm[Math.floor(Math.random() * happyAffirm.length)].text;

  return (selectedText);
}

const HappyScreen = () => {

  const [newState, setNewState] = useState(false);

  return (
    <View style={styles.container}>
    <Card>
    <View>
      <Text 
      style={{
        color: '#2f4f4f',
        backgroundColor: "#fffaf0",
        fontSize: 30,
        padding: 60,
      }}
    >{randomHappy(happyAffirm)}</Text>
    </View>
    </Card>
    <View style={styles.button}>
    <Pressable 
      onPress={pushFavorite}>
        <Text style={styles.text}>Remind me today!</Text>
      </Pressable>
    </View>
    <View style={styles.button}>
    <Pressable 
      onPress={() => {
        setNewState(!newState);
      }}>
        <Text style={styles.text}>Not Feeling it</Text>
      </Pressable>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#5f9ea0',
    marginVertical: 13,
  },

  text: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.25,
    padding: 8,
    color: 'white',
    width: 200,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },

  
  
});

export default HappyScreen;
