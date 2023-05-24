import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import LibraryNavigator from "./LibraryNavigator";
import DetailScreen from "../screens/DetailScreen";

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
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="AppNavigator"
          options={{
            headerShown: false,
          }}
          component={LibraryNavigator}
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
