import React from "react";
import LibraryScreen from "../screens/Library/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoldersScreen from "../screens/Library/FoldersScreen";
import LabelScreen from "../screens/LabelScreen";
import RightHeaderIcon from "../components/layouts/RightHeaderIcon";
import ScreenDetail from "../screens/ScreenDetail";

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
      <Stack.Screen name="Folders" component={FoldersScreen} />
      <Stack.Screen
        name="Labels"
        component={LabelScreen}
        options={{
          presentation: "formSheet",
          headerRight: () => null,
        }}
      />
      <Stack.Screen name="Screen Detail" component={ScreenDetail} />
    </Stack.Navigator>
  );
};

export default LibraryNavigator;
