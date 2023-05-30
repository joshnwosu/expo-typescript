import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../../../context/ThemeContext";
import GroupCard from "../../../../layouts/group-card/GroupCard";
import HapticTouch from "../../../../common/HapticTouch";
import { BackgroundProps } from "../../../../../types";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { setThemeModeAsync } from "../../../../../features/theme/themeSlice";
// import { useAppDispatch, useAppSelector } from "";

const layout: BackgroundProps[] = [
  {
    name: "system",
    backgroundColor: "automatic",
    options: ["#FFFFFF", "#000000"],
  },
  {
    name: "light",
    backgroundColor: "#FFFFFF",
  },
  {
    name: "dark",
    backgroundColor: "#000000",
  },
];

const LayoutColor = () => {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector((state) => state.theme);

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const handleThemeModeChange = async (theme: BackgroundProps["name"]) => {
    await dispatch(setThemeModeAsync(theme));
  };

  return (
    <GroupCard
      title={`Layout (${themeMode} MODE)`}
      // description="Change the appearn accent of the app."
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          padding: 20,
        }}
      >
        {layout.map(({ name, backgroundColor, options }, index) => {
          return (
            <View key={name} style={{ flex: 1, alignItems: "center" }}>
              <HapticTouch
                activeOpacity={1}
                style={{
                  width: "100%",
                  height: 60,
                  borderRadius: 10,
                  padding: 10,
                }}
                onPress={() => handleThemeModeChange(name)}
                // onPress={() => {
                //   dispatch(setThemeMode(name));
                // }}
              >
                {options ? (
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      borderRadius: 10,
                      overflow: "hidden",
                      borderWidth: 2,
                      borderColor:
                        name === themeMode ? colors.primary : colors.border,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: options[0],
                      }}
                    />
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: options[1],
                      }}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      backgroundColor,
                      borderWidth: 2,
                      borderColor:
                        name === themeMode ? colors.primary : colors.border,
                    }}
                  />
                )}
              </HapticTouch>
              <Text
                style={{
                  color: colors.text,
                  textTransform: "capitalize",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                {name}
              </Text>
            </View>
          );
        })}
      </View>
    </GroupCard>
  );
};

export default LayoutColor;

const styles = StyleSheet.create({});
