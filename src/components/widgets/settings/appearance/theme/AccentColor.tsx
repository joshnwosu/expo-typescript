import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../../../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";
import GroupCard from "../../../../layouts/group-card/GroupCard";
import HapticTouch from "../../../../common/HapticTouch";
import { accents } from "../../../../config/theme";

const AccentColor = () => {
  const [selected, setSelected] = useState(accents[0]);
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <GroupCard
      title="Accent color"
      description="Change the main accent of the app. This will not change the color of existing tasks."
    >
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
            <HapticTouch
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
            </HapticTouch>
          );
        })}
      </View>
    </GroupCard>
  );
};

export default AccentColor;

const styles = StyleSheet.create({});
