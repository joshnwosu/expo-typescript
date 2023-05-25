import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import RightHeaderIcon from "../components/layouts/RightHeaderIcon";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => <RightHeaderIcon />,
      }}
    >
      <Stack.Screen
        name="Set"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
