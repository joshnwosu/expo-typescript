import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
