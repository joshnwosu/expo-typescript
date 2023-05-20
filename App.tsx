import "react-native-gesture-handler";
import "react-native-reanimated";

// import { useContext, useEffect } from "react";
// import { StatusBar } from "expo-status-bar";
// import { View, StyleSheet, useColorScheme } from "react-native";
// import AppNavigator from "./src/navigation/AppNavigator";
// import { DefaultTheme, DarkTheme } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { LogBox } from "react-native";
import ThemeProvider from "./src/components/context/ThemeProvider";
import Root from "./src/components/root/Root";

LogBox.ignoreAllLogs(); // ignore all annoying warnings.

const App: React.FC = () => {
  // const scheme = useColorScheme();

  // const CustomDefaultTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     activeColor: "#5d68f9",
  //     inActiveColor: "#6d6f7a",
  //     // add custom color
  //   },
  // };

  // const CustomDarkTheme = {
  //   ...DarkTheme,
  //   colors: {
  //     ...DarkTheme.colors,
  //     activeColor: "#5d68f9",
  //     inActiveColor: "#6d6f7a",
  //   },
  // };

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
