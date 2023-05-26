import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import GroupCard from "../../components/layouts/group-card/GroupCard";

export default function SettingsDetails({ navigation, route }) {
  const { name } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);
  return (
    <View style={{ padding: 15 }}>
      <GroupCard title="Appearance">
        <View style={{ padding: 20 }}>
          <Text>Hello world here</Text>
        </View>
      </GroupCard>
    </View>
  );
}
