import { View, StyleSheet, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import MasonryLayout from "../components/layouts/MasonryLayout";

export default function NoteScreen({ navigation, route }) {
  const { screen } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: screen,
    });
  }, []);
  return (
    <View style={styles.container}>
      <MasonryLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
