import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import RightHeaderIcon from "../components/layouts/RightHeaderIcon";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => <RightHeaderIcon />,
      }}
    >
      <Stack.Screen
        name="Sea"
        options={{ title: "Search" }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
