import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#2f4f4f' , fontSize: 20, fontWeight: 'bold'}}>What is your mood today?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefd5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});