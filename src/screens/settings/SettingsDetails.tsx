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
      <GroupCard title="Accent color">
        <AccentColor />
      </GroupCard>
    </View>
  );
}
