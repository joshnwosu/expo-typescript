import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/lottie/landingAnimation.json")}
      />
    </View>
  );
}
