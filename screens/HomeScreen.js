import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const happyFace = require("../assets/images/happyFace.png");
const sadFace = require("../assets/images/sadFace.png");
const angryFace = require("../assets/images/angryFace.png");


const HomeScreen = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#2f4f4f",
          fontSize: 50,
          fontWeight: "bold",
          padding: 30,
        }}
      >
        What is your mood today?
      </Text>
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => {
        navigation.navigate('HappyScreen'
        );
        }}>
      <Image source={happyFace} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button} 
      onPress={() => {
        navigation.navigate('SadScreen'
        );
        }}
      >
      <Image source={sadFace} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button} 
      onPress={() => {
        navigation.navigate('AngryScreen'
        );
        }}
      >
      <Image source={angryFace} style={styles.image} />
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  imageContainer: {
    flex: 1,
    paddingTop: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
});



export default HomeScreen;
