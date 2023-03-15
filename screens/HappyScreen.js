import { StyleSheet, Text, View, Button } from "react-native";
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
        padding: 50,
      }}
    >{randomHappy(happyAffirm)}</Text>
    </View>
    </Card>
    <View style={styles.buttonContainer}>
    <Button
      onPress={pushFavorite}
      title="Display Favorite"
      color='#007AFF'
    />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({

  buttonContainer: {
    backgroundColor: "#f0ff",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
  },
  
});

export default HappyScreen;
