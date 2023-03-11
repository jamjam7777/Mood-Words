import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import {happyAffirm} from "../components/happyAffirm";

function randomHappy(happyAffirm) {
  return (happyAffirm[Math.floor(Math.random() * happyAffirm.length)].text);
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
});

export default HappyScreen;
