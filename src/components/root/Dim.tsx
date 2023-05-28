import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "../../app/hooks";

const Dim = () => {
  const { accentMode } = useAppSelector((state) => state.theme);
  const opacity = 30;
  return (
    <View
      pointerEvents="none"
      style={{
        backgroundColor: `${accentMode}${opacity}`,
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    />
  );
};

export default Dim;
