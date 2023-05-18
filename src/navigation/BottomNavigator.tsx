import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "../components/navigation/BottomTabBar";
import { MainScreen } from "../types";
// import LibraryScreen from "../screens/LibraryScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SvgIcon from "../components/common/icons";
import SearchScreen from "../screens/SearchScreen";
// import NoteScreen from "../screens/NoteScreen";
import NotificationScreen from "../screens/NotificationScreen";
import LibraryNavigator from "./LibraryNavigator";

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
          fontWeight: "600",
        },
        headerTitleAlign: "center",
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="Library" component={LibraryNavigator} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
