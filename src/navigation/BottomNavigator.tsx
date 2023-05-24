// import React from "react";
// import { useTheme } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import BottomTabBar from "../components/navigation/BottomTabBar";
// import NotificationScreen from "../screens/NotificationScreen";
// import LibraryNavigator from "./LibraryNavigator";
// import SearchNavigator from "./SearchNavigator";
// import SettingsNavigator from "./SettingsNavigator";

// const Tab = createBottomTabNavigator();

// const BottomNavigator = () => {
//   const { colors } = useTheme();
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         headerStyle: {
//           backgroundColor: colors.background,
//         },
//         headerShadowVisible: false,
//         headerTitleStyle: {
//           fontSize: 20,
//           fontWeight: "600",
//         },
//         headerTitleAlign: "center",
//       }}
//       tabBar={(props) => <BottomTabBar {...props} />}
//     >
//       <Tab.Screen name="Library" component={LibraryNavigator} />
//       <Tab.Screen name="Search" component={SearchNavigator} />
//       <Tab.Screen name="Notification" component={NotificationScreen} />
//       <Tab.Screen name="Settings" component={SettingsNavigator} />
//     </Tab.Navigator>
//   );
// };

// export default BottomNavigator;
