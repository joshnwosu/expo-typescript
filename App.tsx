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

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // add custom color
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      card: "#141414",

      // card: "#1F2123",

      // card: "#262634",
      // background: "#1F1D2C",
    },
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style={scheme === "dark" ? "light" : "dark"} />
        <AppNavigator
          theme={scheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
