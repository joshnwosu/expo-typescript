import "react-native-gesture-handler";
import "react-native-reanimated";

import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, useColorScheme } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style={scheme === "dark" ? "light" : "dark"} />
        <AppNavigator theme={scheme === "dark" ? DarkTheme : DefaultTheme} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
