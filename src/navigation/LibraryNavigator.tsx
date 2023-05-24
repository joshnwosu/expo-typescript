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

const Stack = createNativeStackNavigator();

const LibraryHeaderRight = ({ navigation }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => navigation.navigate("Notification")}
    >
      <SvgIcon icon="notification" width={20} height={20} fill="#FFFFFF" />
    </TouchableOpacity>
    <TouchableOpacity
      style={{ marginLeft: 20 }}
      onPress={() => navigation.navigate("Settings")}
    >
      <SvgIcon icon="settings" width={20} height={20} fill="#FFFFFF" />
    </TouchableOpacity>
  </View>
);

const LibraryNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Library"
        options={{
          headerTitle: "Library",
          headerRight: () => <LibraryHeaderRight navigation={navigation} />,
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
