import React from "react";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "../components/navigation/BottomTabBar";
import { MainScreen } from "../types";
import LibraryScreen from "../screens/LibraryScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from "../screens/SettingsScreen";
// import { MAIN_SCREENS } from "../utils/screens";

export const MAIN_SCREENS: MainScreen[] = [
  {
    name: "Library",
    component: () => <LibraryScreen />,
  },
  {
    name: "Notes",
    component: () => <HomeScreen />,
  },
  {
    name: "Folder",
    component: () => <HomeScreen />,
  },
  {
    name: "Search",
    component: () => <ChatScreen />,
  },
  {
    name: "Settings",
    component: () => <SettingsScreen />,
  },
];

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "500",
        },
        headerTitleAlign: "center",
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
