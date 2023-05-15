import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
