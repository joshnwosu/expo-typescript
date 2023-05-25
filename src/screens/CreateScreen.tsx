import { View, Text } from "react-native";
import React from "react";
import BulletLayout from "../components/layouts/BulletEditLayout";
import SharedElementLayout from "../components/layouts/SharedElementLayout";

export default function CreateScreen() {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <BulletLayout />
      <SharedElementLayout />
    </View>
  );
}
