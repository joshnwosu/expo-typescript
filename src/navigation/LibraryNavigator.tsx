import React from "react";
import { View, TouchableOpacity } from "react-native";
import LibraryScreen from "../screens/LibraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigatorWrapper from "./StackNavigatorWrapper";
import FoldersScreen from "../screens/FoldersScreen";
import LabelScreen from "../screens/LabelScreen";
import SvgIcon from "../components/common/icons";

const Stack = createNativeStackNavigator();

const LibraryNavigator = ({ navigation }) => {
  return (
    <StackNavigatorWrapper>
      <Stack.Screen
        name="Lib"
        options={{
          headerTitle: "Library",
          headerRight(props) {
            return (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity style={{ marginLeft: 20 }}>
                  <SvgIcon
                    icon="notification"
                    width={20}
                    height={20}
                    fill="#FFFFFF"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => navigation.navigate("Settings")}
                >
                  <SvgIcon
                    icon="settings"
                    width={20}
                    height={20}
                    fill="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
        component={LibraryScreen}
      />
      <Stack.Screen name="Folders" component={FoldersScreen} />
      <Stack.Screen
        name="Labels"
        component={LabelScreen}
        options={{
          presentation: "formSheet",
        }}
      />
    </StackNavigatorWrapper>
  );
};

export default LibraryNavigator;
