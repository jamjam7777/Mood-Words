import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";



const AngryScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text>IM ANGRY</Text>
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



export default AngryScreen;
