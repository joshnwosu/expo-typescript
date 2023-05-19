import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import TrashScreen from "../screens/TrashScreen";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const LibraryNavigator = ({ theme }: any) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Lib"
        options={{
          headerShown: true,
          headerTitle: "Library",
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
        }}
        component={LibraryScreen}
      />
      <Stack.Screen name="Trash" component={TrashScreen} />
    </Stack.Navigator>
  );
};

export default LibraryNavigator;
