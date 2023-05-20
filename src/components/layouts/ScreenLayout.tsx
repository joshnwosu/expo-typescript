import { View } from "react-native";
import React from "react";
import ThemeContext from "../context/ThemeContext";

interface Props {
  children: React.ReactNode;
}

export default function ScreenLayout({ children }: Props) {
  const {
    theme: { colors },
  } = React.useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
}
