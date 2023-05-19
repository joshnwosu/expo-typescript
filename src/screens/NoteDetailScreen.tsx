import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

export default function NoteDetailsScreen({ navigation, route }) {
  const { screen } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: screen,
    });
  }, []);
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
}
