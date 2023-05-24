import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

interface Prop {
  children: any;
}

const StackNavigatorWrapper = ({ children }: Prop) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: true,
        // headerLargeTitle: true,
        // headerStyle: {
        //   backgroundColor: colors.background,
        // },
        headerShadowVisible: false,
      }}
    >
      {children}
    </Stack.Navigator>
  );
};

export default StackNavigatorWrapper;
