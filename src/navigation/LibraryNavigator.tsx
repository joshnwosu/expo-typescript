import React from "react";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
      <Stack.Screen name="Note Detail" component={NoteDetailsScreen} />
    </StackNavigatorWrapper>
  );
};

export default LibraryNavigator;
