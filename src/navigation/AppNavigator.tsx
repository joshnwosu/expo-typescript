import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import BottomNavigator from "./BottomNavigator";
import NotificationScreen from "../screens/NotificationScreen";
import DetailScreen from "../screens/DetailScreen";
import CreateScreen from "../screens/CreateScreen";

const Stack = createSharedElementStackNavigator();
// const Stack = createStackNavigator();

const listOpions = {
  cardStyleInterpolator: ({ current: { progress } }) => {
    const opacity = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return { cardStyle: { opacity } };
  },
  gestureEnabled: false,
  cardStyle: {
    backgroundColor: "transparent",
  },
};

const options = {
  headerBackTitleVisible: false,
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const AppNavigator = ({ theme }: any) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AppNavigator"
          options={{
            headerShadowVisible: false,
            title: "Home",
          }}
          component={BottomNavigator}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={() => options}
        />
        <Stack.Screen
          name="Notification"
          options={{
            presentation: "modal",
            headerShown: true,
            headerLeft: () => null,
          }}
          component={NotificationScreen}
        />
        <Stack.Screen
          name="Create"
          options={{
            headerShown: false,
          }}
          component={CreateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
