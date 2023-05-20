import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import ThemeContext from "../context/ThemeContext";
import AppNavigator from "../../navigation/AppNavigator";

export default function Root() {
  const { theme, mode } = useContext(ThemeContext);
  return (
    <>
      <View style={styles.container}>
        <StatusBar style={mode === "dark" ? "light" : "dark"} />
        <AppNavigator theme={theme} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
