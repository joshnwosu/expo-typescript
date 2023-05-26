import React from "react";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoldersScreen from "../screens/FoldersScreen";
import LabelScreen from "../screens/LabelScreen";
import NoteScreen from "../screens/NoteScreen";
import RightHeaderIcon from "../components/layouts/RightHeaderIcon";

const Stack = createNativeStackNavigator();

const LibraryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerRight: () => <RightHeaderIcon />,
      }}
    >
      <Stack.Screen
        name="Lib"
        options={{
          headerTitle: "Library",
        }}
        component={LibraryScreen}
      />
      <Stack.Screen name="Notes" component={NoteScreen} />
      <Stack.Screen name="Folders" component={FoldersScreen} />
      <Stack.Screen
        name="Labels"
        component={LabelScreen}
        options={{
          presentation: "formSheet",
          headerRight: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default LibraryNavigator;
