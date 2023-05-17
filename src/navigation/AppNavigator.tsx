import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavigator from "./BottomNavigator";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import NoteScreen from "../screens/NoteScreen";
import StarredScreen from "../screens/StarredScreen";

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
      {/* <BottomNavigator /> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bottom" component={BottomNavigator} />
        <Stack.Screen name="Notes" component={NoteScreen} />
        <Stack.Screen name="Starred" component={StarredScreen} />
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
