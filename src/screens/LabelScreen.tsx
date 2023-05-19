import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import FoldersLayout from "../components/layouts/FoldersLayout";

export default function LabelScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Labels</Text>
      </View>
    </SafeAreaView>
  );
}
