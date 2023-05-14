import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import BottomTabBar from "../components/navigation/BottomTabBar";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
