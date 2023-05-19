import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SwipableList from "../components/layouts/ListLayout";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Text>Settings</Text>
        <SwipableList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
