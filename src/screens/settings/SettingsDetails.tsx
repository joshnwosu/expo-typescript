import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import GroupCard from "../../components/layouts/group-card/GroupCard";
import AccentColor from "../../components/widgets/AccentColor";

export default function SettingsDetails({ navigation, route }) {
  const { name } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <View style={{ padding: 15 }}>
      <GroupCard
        title="Accent color"
        description="Change the main accent of the app. This will not change the color of existing tasks."
      >
        <AccentColor />
      </GroupCard>
    </View>
  );
}
