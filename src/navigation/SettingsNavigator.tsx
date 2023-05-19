import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigatorWrapper from "./StackNavigatorWrapper";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <StackNavigatorWrapper>
      <Stack.Screen
        name="Set"
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
    </StackNavigatorWrapper>
  );
};

export default SettingsNavigator;
