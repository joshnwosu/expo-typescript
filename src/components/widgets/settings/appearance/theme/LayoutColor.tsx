import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

interface LayoutProp {
  name: "System" | "Light" | "Dark";
  backgroundColor: "Automatic" | "#FFFFFF" | "#000000";
  colors?: ["#FFFFFF", "#000000"];
}

const layout: LayoutProp[] = [
  {
    name: "System",
    backgroundColor: "Automatic",
    colors: ["#FFFFFF", "#000000"],
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
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      {layout.map(({ name, backgroundColor, colors }, index) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={name}
            style={{
              flex: 1,
              height: 60,
              borderRadius: 10,
              padding: 10,
            }}
            onPress={() => setSelected(name)}
          >
            {colors ? (
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  borderRadius: 10,
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: name === selected ? "tomato" : "transparent",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: colors[0],
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    backgroundColor: colors[1],
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  borderRadius: 10,
                  backgroundColor,
                  borderWidth: 1,
                  borderColor: name === selected ? "tomato" : "transparent",
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LayoutColor;

const styles = StyleSheet.create({});
