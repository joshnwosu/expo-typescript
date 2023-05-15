import React, { ElementType } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import BottomTabBar from "../components/navigation/BottomTabBar";
import HomeIcon from "../components/common/icons/HomeIcon";
// import { Element } from "react";

const Tab = createBottomTabNavigator();

interface Screen {
  name: string;
  component: React.FC;
  icon: React.FC;
}

const SCREENS: Screen[] = [
  {
    name: "Home",
    component: () => <Home />,
    icon: () => <HomeIcon />,
  },
  {
    name: "Chat",
    component: () => <Chat />,
    icon: () => <HomeIcon />,
  },
  {
    name: "Profile",
    component: () => <Profile />,
    icon: () => <HomeIcon />,
  },
  {
    name: "Setting",
    component: () => <Setting />,
    icon: () => <HomeIcon />,
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
