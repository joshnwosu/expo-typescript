import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import ThemeScreen from "./settings/ThemeScreen";
import FoldersScreen from "./Library/FoldersScreen";
import NotesScreen from "./Library/NotesScreen";

export default function ScreenDetail({ navigation, route }) {
  const { screen } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: screen,
      headerShown: false,
    });
  }, []);

  let componentToRender: JSX.Element | React.ReactElement;

  switch (screen) {
    case "Notes":
      componentToRender = <NotesScreen />;
      break;
    case "Folders":
      componentToRender = <FoldersScreen />;
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
