import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import MasonryLayout from "../components/layouts/MasonryLayout";

export default function NoteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MasonryLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
