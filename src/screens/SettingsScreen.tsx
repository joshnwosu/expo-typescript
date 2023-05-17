import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SwipableList from "../components/layouts/ListLayout";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, paddingVertical: 30 }}>
      <Text>Settings</Text>
      <SwipableList />
    </View>
  );
}

const styles = StyleSheet.create({});
