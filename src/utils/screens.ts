import { MainScreen } from "../types";
// screens
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from "../screens/SettingsScreen";

export const MAIN_SCREENS: MainScreen[] = [
  {
    name: "Notes",
    component: HomeScreen,
  },
  {
    name: "Folder",
    component: HomeScreen,
  },
  {
    name: "Chat",
    component: ChatScreen,
  },
  {
    name: "Settings",
    component: SettingsScreen,
  },
];
