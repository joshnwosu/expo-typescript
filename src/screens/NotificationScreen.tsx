import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import BulletLayout from "../components/layouts/BulletEditLayout";

export default function NotificationScreen() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 50,
      }}
    >
      {/* <LottieView
        autoPlay
        loop
        source={require("../../assets/lottie/landingAnimation.json")}
      /> */}
      <BulletLayout />
    </View>
  );
}
