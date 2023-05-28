import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GroupCard from "../group-card/GroupCard";
import AccentColor from "../../widgets/settings/appearance/theme/AccentColor";
import LayoutColor from "../../widgets/settings/appearance/theme/LayoutColor";

const ThemeScreen = () => {
  return (
    <View style={{ padding: 15 }}>
      <GroupCard
        title="Accent color"
        description="Change the main accent of the app. This will not change the color of existing tasks."
      >
        <AccentColor />
      </GroupCard>
      <GroupCard
        title="Layout"
        description="These settings are not applied in private node mode."
      >
        <LayoutColor />
      </GroupCard>
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({});
