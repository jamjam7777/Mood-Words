import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import happyAffirm from '../components/happyAffirm';



const HappyScreen = () => {

  let randomHappy = happyAffirm[Math. floor(Math. random() * happyAffirm)]

  console.log(randomHappy)
  
  return (
    <View style={styles.container}>
      <Text>IM HAPPY</Text>
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



export default HappyScreen;
