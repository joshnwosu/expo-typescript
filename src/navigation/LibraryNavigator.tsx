import React from "react";
import TrashScreen from "../screens/TrashScreen";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import NoteDetailsScreen from "../screens/NoteDetailScreen";
import StackNavigatorWrapper from "./StackNavigatorWrapper";

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
      <Stack.Screen name="Recently Deleted" component={TrashScreen} />
      <Stack.Screen name="Note Detail" component={NoteDetailsScreen} />
    </StackNavigatorWrapper>
  );
};

export default LibraryNavigator;
