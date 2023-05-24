import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavigator from "./BottomNavigator";
import DetailScreen from "../screens/DetailScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import NoteScreen from "../screens/NoteScreen";
import StarredScreen from "../screens/StarredScreen";
import NoteDetailsScreen from "../screens/NoteDetailScreen";
import LibraryNavigator from "./LibraryNavigator";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const AppNavigator = ({ theme }: any) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Bottom" component={BottomNavigator} /> */}
        <Stack.Screen name="Library" component={LibraryNavigator} />
        <Stack.Screen
          name="Settings"
          options={{ title: "Settings" }}
          component={SettingsScreen}
        />
        <Stack.Screen name="Notes" component={NoteScreen} />
        <Stack.Screen name="Starred" component={StarredScreen} />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={() => options}
        />
        <Stack.Screen name="Note Detail" component={NoteDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
