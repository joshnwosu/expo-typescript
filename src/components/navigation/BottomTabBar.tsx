import { View, Text, Pressable, ViewStyle } from "react-native";
import React from "react";
import {
  ParamListBase,
  TabNavigationState,
  NavigationHelpers,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SvgIcon from "../common/icons";
import ThemeContext from "../context/ThemeContext";

interface Props {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: Props) {
  const insets = useSafeAreaInsets();
  // Adjust the position of the tab bar to avoid overlapping with the gesture line
  const tabBarStyle: ViewStyle = { paddingBottom: insets.bottom };
  const {
    theme: { colors },
  } = React.useContext(ThemeContext);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.card,
        ...tabBarStyle,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label: any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (route?.name === "Edit") {
            navigation.navigate("Create");
          } else {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={label}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: insets.bottom > 0 ? 0 : 10,
            }}
          >
            <SvgIcon
              icon={label.toLowerCase()}
              width={24}
              height={24}
              fill={isFocused ? colors.primary : colors.inactive}
            />
            <Text
              style={{
                color: isFocused ? colors.primary : colors.inactive,
                fontWeight: "400",
                fontSize: 12,
                marginTop: 5,
              }}
            >
              {label === "Edit" ? "Create" : label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
