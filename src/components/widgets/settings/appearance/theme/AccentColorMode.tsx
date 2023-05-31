import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../../../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";
import GroupCard from "../../../../layouts/group-card/GroupCard";
import HapticTouch from "../../../../common/HapticTouch";
import { accents } from "../../../../config/theme";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { setAccentModeAsync } from "../../../../../features/theme/themeSlice";
import { AccentColor } from "../../../../../types";

const AccentColorMode = () => {
  const dispatch = useAppDispatch();
  const { accentMode } = useAppSelector((state) => state.theme);
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const handleAccentModeChange = async (accent: AccentColor, index: number) => {
    await dispatch(setAccentModeAsync(accent));
    scrollToActiveIndex(index);
  };

  const scrollViewRef = React.useRef<any>(null);

  const scrollToActiveIndex = (index: number) => {
    const xOffset = index * 40;
    scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
  };

  return (
    <GroupCard
      title="Accent color"
      description="Change the main accent of the app. This will not change the color of existing tasks."
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        // showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "space-around",
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
                marginRight: index === accents.length - 1 ? 0 : 10,
              }}
              onPress={() => handleAccentModeChange(color, index)}
            >
              {accentMode === color && (
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
      </ScrollView>
    </GroupCard>
  );
};

export default AccentColorMode;

const styles = StyleSheet.create({});
