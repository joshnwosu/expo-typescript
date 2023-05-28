import { View, Text } from "react-native";
import React from "react";

const Dim = () => {
  return (
    <View
      pointerEvents="none"
      style={{
        backgroundColor: "#f00f0020",
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
