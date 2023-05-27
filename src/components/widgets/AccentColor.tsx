import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";

const accents = [
  "tomato",
  "#3269FF",
  "#FFD947",
  "#AE3B76",
  "#0BEAAF",
  "#FE7745",
];

const AccentColor = () => {
  const [selected, setSelected] = useState(accents[0]);
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      {accents.map((color, index) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            style={{
              height: 40,
              aspectRatio: 1,
              borderRadius: 20,
              backgroundColor: color,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setSelected(color)}
          >
            {selected === color && (
              <>
                <Animated.View
                  entering={BounceIn}
                  style={{
                    height: 30,
                    aspectRatio: 1,
                    borderRadius: 30,
                    backgroundColor: colors.card,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="checkmark-done"
                    size={14}
                    color={colors.text}
                  />
                </Animated.View>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AccentColor;

const styles = StyleSheet.create({});
