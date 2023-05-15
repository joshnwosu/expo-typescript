import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import BottomTabBar from "../components/navigation/BottomTabBar";

const Tab = createBottomTabNavigator();

interface Screen {
  name: string;
  component: React.FC;
}

const SCREENS: Screen[] = [
  // {
  //   name: "Home",
  //   component: () => <Home />,
  // },
  {
    name: "Folder",
    component: () => <Home />,
  },
  {
    name: "Chat",
    component: () => <Chat />,
  },
  {
    name: "Note",
    component: () => <Chat />,
  },
  {
    name: "Profile",
    component: () => <Profile />,
  },
  {
    name: "Setting",
    component: () => <Setting />,
  },
];

const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      {SCREENS.map((item, index) => (
        <Tab.Screen key={index} name={item.name}>
          {item.component}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
