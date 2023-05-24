import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import LibraryNavigator from "./LibraryNavigator";
import DetailScreen from "../screens/DetailScreen";
import BottomNavigator from "./BottomNavigator";
import SvgIcon from "../components/common/icons";

const Stack = createSharedElementStackNavigator();

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
          }}
          component={BottomNavigator}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={() => options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
