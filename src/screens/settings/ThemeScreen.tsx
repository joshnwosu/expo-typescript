import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import AccentColorMode from "../../components/widgets/settings/appearance/theme/AccentColorMode";
import LayoutColor from "../../components/widgets/settings/appearance/theme/LayoutColor";
import NightMode from "../../components/widgets/settings/appearance/theme/NightMode";
import DisplayView from "../../components/widgets/settings/appearance/theme/DisplayView";
import BrightnessMode from "../../components/widgets/settings/appearance/theme/BrightnessMode";

const ThemeScreen = () => {
  return (
    <ScrollView style={{ padding: 15 }}>
      <AccentColorMode />
      <LayoutColor />
      <NightMode />
      <BrightnessMode />
      {/* <DisplayView /> // ToDo */}
    </ScrollView>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({});
