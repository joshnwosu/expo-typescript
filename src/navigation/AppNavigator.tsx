import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavigator from "./BottomNavigator";

const AppNavigator = ({ theme }: any) => {
  return (
    <NavigationContainer theme={theme}>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
