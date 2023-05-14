import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// screens
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ navigation }: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
