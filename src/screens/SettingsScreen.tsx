import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

export default function SettingsScreen() {
  // const animation = useRef(null);
  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   animation.current?.play();
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/lottie/loading-files.json")}
      />
    </View>
  );
}
