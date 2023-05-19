import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const SearchNavigator = ({ theme }: any) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Sea"
        options={{
          headerShown: true,
          headerTitle: "Search",
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
        }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
