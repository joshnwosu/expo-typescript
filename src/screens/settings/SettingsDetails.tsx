import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import GroupCard from "../../components/layouts/group-card/GroupCard";
import AccentColor from "../../components/widgets/settings/appearance/theme/AccentColor";
import ThemeScreen from "../../components/layouts/settings/ThemeScreen";

export default function SettingsDetails({ navigation, route }) {
  const { name } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return <ThemeScreen />;
}
