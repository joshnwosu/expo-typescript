import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import ThemeContext from "../context/ThemeContext";
import AppNavigator from "../../navigation/AppNavigator";

export default function Root() {
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    console.log("T: ", colors);
  }, [colors]);

  return (
    <>
      <View style={styles.container}>
        <StatusBar style={"dark"} />
        <AppNavigator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
