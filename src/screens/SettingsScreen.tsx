import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SwipableList from "../components/layouts/ListLayout";
import BulletLayout from "../components/layouts/BulletLayout";
import ScreenLayout from "../components/layouts/ScreenLayout";
import BulletEditLayout from "../components/layouts/BulletEditLayout";
import BulletInserLayout from "../components/layouts/BulletInsertLayout";
import BulletCreateLayout from "../components/layouts/BulletCreateLayout";
import BulletLayoutText from "../components/layouts/BulletLayoutText";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Text>Settings</Text>
        <SwipableList />
      </ScrollView> */}

      {/* <BulletLayout /> */}
      {/* <BulletEditLayout /> */}
      {/* <BulletInserLayout /> */}
      {/* <BulletCreateLayout /> */}
      <BulletLayoutText />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
