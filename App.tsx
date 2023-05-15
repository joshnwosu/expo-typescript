import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, useColorScheme } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default function App() {
  const scheme = useColorScheme();
  return (
    <View style={styles.container}>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <AppNavigator theme={scheme === "dark" ? DarkTheme : DefaultTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
