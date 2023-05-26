import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import RightHeaderIcon from "../components/layouts/RightHeaderIcon";
import SettingsDetails from "../screens/settings/SettingsDetails";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        // presentation: "formSheet",
        headerRight: () => null,
      }}
    >
      <Stack.Screen
        name="Set"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
      <Stack.Screen name="Settings Detail" component={SettingsDetails} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
