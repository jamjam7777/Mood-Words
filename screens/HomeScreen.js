import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const happyFace = require("../assets/images/happyFace.png");
const sadFace = require("../assets/images/sadFace.png");
const angryFace = require("../assets/images/angryFace.png");




const Home = ({navigation}) => {
  

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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HappyScreen')}>
      <Image source={happyFace} style={styles.image} />
      </TouchableOpacity>
      <Image source={sadFace} style={styles.image} />
      <Image source={angryFace} style={styles.image} />
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



export default Home;
