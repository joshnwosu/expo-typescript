import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import AccentColor from "../../widgets/settings/appearance/theme/AccentColor";
import LayoutColor from "../../widgets/settings/appearance/theme/LayoutColor";
import NightMode from "../../widgets/settings/appearance/theme/NightMode";

const ThemeScreen = () => {
  return (
    <ScrollView style={{ padding: 15 }}>
      <AccentColor />
      <LayoutColor />
      <NightMode />
    </ScrollView>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({});
