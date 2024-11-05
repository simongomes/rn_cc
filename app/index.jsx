import { Text, View } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl text-black">React Native CC</Text>
      <Link href="/profile" style={{color: 'blue'}}>Profile</Link>
    </View>
  );
}

export default App;