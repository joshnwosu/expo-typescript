import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "../components/navigation/BottomTabBar";
import { MainScreen } from "../types";
import LibraryScreen from "../screens/LibraryScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SvgIcon from "../components/common/icons";
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
  // {
  //   name: "Folder",
  //   component: () => <HomeScreen />,
  // },
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
          fontWeight: "600",
        },
        headerTitleAlign: "center",
        // headerRight: () => (
        //   <TouchableOpacity style={{ marginRight: 20 }}>
        //     <SvgIcon
        //       icon="notification"
        //       fill={colors.text}
        //       width={30}
        //       height={30}
        //     />
        //   </TouchableOpacity>
        // ),
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
