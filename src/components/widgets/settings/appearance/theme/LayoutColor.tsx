import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import ThemeContext from "../../../../context/ThemeContext";
import GroupCard from "../../../../layouts/group-card/GroupCard";
import HapticTouch from "../../../../common/HapticTouch";

interface LayoutProp {
  name: "System" | "Light" | "Dark";
  backgroundColor: "Automatic" | "#FFFFFF" | "#000000";
  options?: ["#FFFFFF", "#000000"];
}

const layout: LayoutProp[] = [
  {
    name: "System",
    backgroundColor: "Automatic",
    options: ["#FFFFFF", "#000000"],
  },
  {
    name: "Light",
    backgroundColor: "#FFFFFF",
  },
  {
    name: "Dark",
    backgroundColor: "#000000",
  },
];

const LayoutColor = () => {
  const [selected, setSelected] = useState<LayoutProp["name"]>(layout[0].name);
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
                onPress={() => setSelected(name)}
              >
                {options ? (
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      borderRadius: 10,
                      overflow: "hidden",
                      borderWidth: 2,
                      borderColor: name === selected ? "tomato" : colors.border,
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
                      borderColor: name === selected ? "tomato" : colors.border,
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
