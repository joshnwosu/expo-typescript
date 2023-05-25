import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import BulletLayout from "../components/layouts/BulletEditLayout";

export default function NotificationScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LottieView
        source={require("../../assets/lottie/landingAnimation.json")}
        autoPlay
        loop
      />
    </View>
  );
}
