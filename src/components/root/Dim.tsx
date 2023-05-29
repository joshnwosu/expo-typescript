import { View } from "react-native";
import React from "react";
import { useAppSelector } from "../../app/hooks";

const Dim = () => {
  const { accentMode, dimBrightness } = useAppSelector((state) => state.theme);

  return (
    <View
      pointerEvents="none"
      style={{
        backgroundColor: `${accentMode}${dimBrightness}`,
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
