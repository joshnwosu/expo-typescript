import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "../components/navigation/BottomTabBar";
import { MAIN_SCREENS } from "../utils/screens";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      {MAIN_SCREENS.map((item, index) => (
        <Tab.Screen key={index} name={item.name}>
          {item.component}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
