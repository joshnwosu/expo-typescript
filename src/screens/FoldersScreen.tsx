import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FoldersLayout from "../components/layouts/FoldersLayout";

export default function FoldersScreen() {
  return (
    <View style={{ flex: 1 }}>
      <FoldersLayout />
    </View>
  );
}
