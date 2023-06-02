import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/settings/SettingsScreen";
import ScreenDetail from "../screens/ScreenDetail";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerRight: () => null,
      }}
    >
      <Stack.Screen
        name="Set"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
      <Stack.Screen name="Screen Detail" component={ScreenDetail} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
