import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const AccentColor = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const accents = Array(5)
    .fill(0)
    .map((_, index) => ({ id: index }));
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      {accents.map((item) => {
        return (
          <View
            key={item.id}
            style={{
              height: 30,
              aspectRatio: 1,
              borderRadius: 20,
              backgroundColor: colors.activeColor,
            }}
          />
        );
      })}
    </View>
  );
};

export default AccentColor;

const styles = StyleSheet.create({});
