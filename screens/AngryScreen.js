import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import {angryAffirm} from "../components/angryAffirm";

function randomAngry(angryAffirm) {
  return (angryAffirm[Math.floor(Math.random() * angryAffirm.length)].text);
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

export default AngryScreen;
