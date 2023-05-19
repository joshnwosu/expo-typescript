import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import TrashScreen from "../screens/TrashScreen";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import NoteDetailsScreen from "../screens/NoteDetailScreen";

const Stack = createNativeStackNavigator();

const LibraryNavigator = ({ theme }: any) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLargeTitle: true,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Lib"
        options={{
          headerTitle: "Library",
        }}
        component={LibraryScreen}
      />
      <Stack.Screen name="Recently Deleted" component={TrashScreen} />
      <Stack.Screen name="Note Detail" component={NoteDetailsScreen} />
    </Stack.Navigator>
  );
};

export default LibraryNavigator;
