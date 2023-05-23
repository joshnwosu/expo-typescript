import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import ListLayout from "../components/layouts/ListLayout";
import ScreenLayout from "../components/layouts/ScreenLayout";
import BulletEditLayout from "../components/layouts/BulletEditLayout";
import * as Speech from "expo-speech";

export default function SettingsScreen() {
  const speak = () => {
    const say1: any = 1;
    Speech.speak(say1);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ListLayout /> */}
      {/* <DragList /> */}
      {/* <BulletEditLayout /> */}
      <Button onPress={speak} title="Speak" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
