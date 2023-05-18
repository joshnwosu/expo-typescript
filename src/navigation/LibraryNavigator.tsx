import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import TrashScreen from "../screens/TrashScreen";
import LibraryScreen from "../screens/LibraryScreen";

const Stack = createStackNavigator();

const LibraryNavigator = ({ theme }: any) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lib" component={LibraryScreen} />
      <Stack.Screen name="Trash" component={TrashScreen} />
    </Stack.Navigator>
  );
};

export default LibraryNavigator;
