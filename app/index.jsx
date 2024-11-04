import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native CC</Text>
      <Link href="/profile" style={{color: 'blue'}}>Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;