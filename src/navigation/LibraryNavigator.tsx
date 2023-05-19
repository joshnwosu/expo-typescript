import React from "react";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigatorWrapper from "./StackNavigatorWrapper";
import FoldersScreen from "../screens/FoldersScreen";
import LabelScreen from "../screens/LabelScreen";

const Stack = createNativeStackNavigator();

const LibraryNavigator = () => {
  return (
    <StackNavigatorWrapper>
      <Stack.Screen
        name="Lib"
        options={{
          headerTitle: "Library",
        }}
        component={LibraryScreen}
      />
      <Stack.Screen name="Folders" component={FoldersScreen} />
      <Stack.Screen
        name="Labels"
        component={LabelScreen}
        options={{
          presentation: "formSheet",
        }}
      />
    </StackNavigatorWrapper>
  );
};

export default LibraryNavigator;
