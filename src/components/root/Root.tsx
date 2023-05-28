import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import ThemeContext from "../context/ThemeContext";
import AppNavigator from "../../navigation/AppNavigator";
import Dim from "./Dim";
import { useAppSelector } from "../../app/hooks";

export default function Root() {
  const { dimMode } = useAppSelector((state) => state.theme);
  const { theme, mode } = useContext(ThemeContext);
  return (
    <>
      <View style={styles.container}>
        <StatusBar style={mode === "dark" ? "light" : "dark"} />
        <AppNavigator theme={theme} />
        {dimMode && <Dim />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
