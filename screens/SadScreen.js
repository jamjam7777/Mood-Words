import { StyleSheet, Text, View, Pressable } from "react-native";
import { Card } from "react-native-elements";
import {sadAffirm} from "../components/sadAffirm";
import { useState } from "react";

function randomSad(sadAffirm) {
  return (sadAffirm[Math.floor(Math.random() * sadAffirm.length)].text);
}

function pushFavorite(){
  // let favoriteText;
  // favoriteText = selectedText; 
  favoritesArr.push(selectedText)
  
  console.log(favoritesArr)
}

const SadScreen = () => {

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
        padding: 50,
      }}
    >{randomSad(sadAffirm)}</Text>
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
  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },

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
});

export default SadScreen;
