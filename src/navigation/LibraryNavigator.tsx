import React from "react";
import { View, TouchableOpacity } from "react-native";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoldersScreen from "../screens/FoldersScreen";
import LabelScreen from "../screens/LabelScreen";
import SvgIcon from "../components/common/icons";
import NoteScreen from "../screens/NoteScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsNavigator from "./SettingsNavigator";
import NotificationScreen from "../screens/NotificationScreen";
import RightHeaderIcon from "../components/layouts/RightHeaderIcon";

const Stack = createNativeStackNavigator();

const LibraryNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerRight: () => <RightHeaderIcon />,
      }}
    >
      <Stack.Screen
        name="Lib"
        options={{
          headerTitle: "Library",
        }}
        component={LibraryScreen}
      />
      <Stack.Screen name="Notes" component={NoteScreen} />
      <Stack.Screen name="Folders" component={FoldersScreen} />
      <Stack.Screen
        name="Labels"
        component={LabelScreen}
        options={{
          presentation: "formSheet",
        }}
      />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: "formSheet",
        }}
      >
        <Stack.Screen name="Settings" component={SettingsNavigator} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LibraryNavigator;
