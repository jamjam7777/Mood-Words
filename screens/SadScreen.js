import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import {sadAffirm} from "../components/sadAffirm";

function randomSad(sadAffirm) {
  return (sadAffirm[Math.floor(Math.random() * sadAffirm.length)].text);
}

const SadScreen = () => {
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
    >{randomSad(sadAffirm)}</Text>
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
    padding: 15,
  },
});

export default SadScreen;
