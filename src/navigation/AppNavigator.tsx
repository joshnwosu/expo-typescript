import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavigator from "./BottomNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
