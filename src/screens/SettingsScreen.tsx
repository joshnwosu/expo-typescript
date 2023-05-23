import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import ListLayout from "../components/layouts/ListLayout";
import ScreenLayout from "../components/layouts/ScreenLayout";
import BulletEditLayout from "../components/layouts/BulletEditLayout";
import * as Speech from "expo-speech";
import * as Permissions from "expo-permissions";

export default function SettingsScreen() {
  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);

    if (status !== "granted") {
      console.log("Speech permissions not granted");
    }
  };

  const speak = () => {
    const text = "Hello, world!"; // Replace with the desired text to speak

    Speech.speak(text);
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
