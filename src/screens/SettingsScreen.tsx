import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import ListLayout from "../components/layouts/ListLayout";
import ScreenLayout from "../components/layouts/ScreenLayout";
import BulletEditLayout from "../components/layouts/BulletEditLayout";
import GroupCard from "../components/layouts/group-card/GroupCard";

const DATA = [
  { name: "General", icon: "settings" },
  { name: "Appearance", icon: "folder" },
];

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* <ListLayout /> */}
      {/* <DragList /> */}
      {/* <BulletEditLayout /> */}

      <GroupCard data={DATA} />
    </View>
  );
}

const styles = StyleSheet.create({});
