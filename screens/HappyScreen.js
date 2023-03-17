import { StyleSheet, Text, View, Pressable } from "react-native";
import { Card } from "react-native-elements";
import {happyAffirm} from "../components/happyAffirm";

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
  return (
    <View style={styles.container}>
    <Card>
    <View>
      <Text 
      style={{
        color: '#2f4f4f',
        fontSize: 30,
        padding: 60,
      }}
    >{randomHappy(happyAffirm)}</Text>
    </View>
    </Card>
    <View style={styles.button}>
    <Pressable 
      onPress={pushFavorite}>
        <Text style={styles.text}>Show me today</Text>
      </Pressable>
    </View>
    <View style={styles.button}>
    <Pressable 
      onPress={pushFavorite}>
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
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5f9ea0',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    width: 200,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
  },
  
});

export default HappyScreen;
