import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import StackNavigatorWrapper from "./StackNavigatorWrapper";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <StackNavigatorWrapper>
      <Stack.Screen
        name="Sea"
        options={{ title: "Search" }}
        component={SearchScreen}
      />
    </StackNavigatorWrapper>
  );
};

export default SearchNavigator;
