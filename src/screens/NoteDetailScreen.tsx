import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import MasonryLayout from "../components/layouts/MasonryLayout";
import SharedElementLayout from "../components/layouts/SharedElementLayout";

export default function NoteDetailsScreen({ navigation, route }) {
  const { screen } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: screen,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <MasonryLayout /> */}
      <SharedElementLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
