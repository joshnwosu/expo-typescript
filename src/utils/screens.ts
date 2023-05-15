import { MainScreen } from "../types";
// screens
import LibraryScreen from "../screens/LibraryScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from "../screens/SettingsScreen";

export const MAIN_SCREENS: MainScreen[] = [
  {
    name: "Library",
    component: LibraryScreen,
  },
  {
    name: "Notes",
    component: HomeScreen,
  },
  {
    name: "Folder",
    component: HomeScreen,
  },
  {
    name: "Search",
    component: ChatScreen,
  },
  {
    name: "Settings",
    component: SettingsScreen,
  },
];
