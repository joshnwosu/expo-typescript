import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import ThemeContext from "../context/ThemeContext";
import AppNavigator from "../../navigation/AppNavigator";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export default function Root() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <View style={styles.container}>
        <StatusBar style={"auto"} />
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
