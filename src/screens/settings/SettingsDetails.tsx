import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import ThemeScreen from "./ThemeScreen";

export default function SettingsDetails({ navigation, route }) {
  const { name } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  let componentToRender: JSX.Element | React.ReactElement;

  switch (name) {
    case "Theme":
      componentToRender = <ThemeScreen />;
      break;
    default:
      componentToRender = (
        <View>
          <Text style={{ color: "red" }}>No component yet.</Text>
        </View>
      );
  }
  return componentToRender;
}
