import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import ThemeScreen from "./settings/ThemeScreen";
import MasonryLayout from "../components/layouts/MasonryLayout";
import FoldersScreen from "./Library/FoldersScreen";
import RentifyTestScreen from "./RentifyTest/RentifyTestScreen";

export default function ScreenDetail({ navigation, route }) {
  const { screen } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: screen,
    });
  }, []);

  let componentToRender: JSX.Element | React.ReactElement;

  switch (screen) {
    case "Notes":
      componentToRender = <MasonryLayout />;
      break;
    case "Folders":
      componentToRender = <FoldersScreen />;
      break;
    case "Rentify Test":
      componentToRender = <RentifyTestScreen navigation={navigation} />;
      break;
    case "Theme":
      componentToRender = <ThemeScreen />;
      break;
    default:
      componentToRender = (
        <View>
          <Text style={{ color: "red" }}>No component yet.</Text>
        </View>
      );
  }
  return componentToRender;
}
