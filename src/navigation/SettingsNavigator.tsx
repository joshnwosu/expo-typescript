import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings screen"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
