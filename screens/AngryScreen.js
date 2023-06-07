import { StyleSheet, Text, View, Pressable } from "react-native";
import { Card } from "react-native-elements";
import {angryAffirm} from "../components/angryAffirm";

function randomAngry(angryAffirm) {
  return (angryAffirm[Math.floor(Math.random() * angryAffirm.length)].text);
}

function pushFavorite(){
  // let favoriteText;
  // favoriteText = selectedText; 
  favoritesArr.push(selectedText)
  
  console.log(favoritesArr)
}

const AngryScreen = () => {
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
    >{randomAngry(angryAffirm)}</Text>
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
      onPress={pushFavorite}>
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

export default AngryScreen;
