import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

export default function SettingsDetails({ navigation, route }) {
  const { name } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <View>
      <Text>SettingsDetails</Text>
    </View>
  );
}
