import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  ParamListBase,
  TabNavigationState,
  NavigationHelpers,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

interface Props {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

interface LabelProps {
  focused: boolean;
  color: string;
  children:
    | string
    | ((props: { focused: boolean; color: string }) => React.ReactNode);
}

function Label({ focused, color, children }: LabelProps) {
  return (
    <Text
      style={{
        color: color,
        fontWeight: "500",
        marginTop: 8,
      }}
    >
      {typeof children === "function" ? children({ focused, color }) : children}
    </Text>
  );
}

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: "red",
        borderTopColor: "blue",
        borderTopWidth: 1,
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
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable key={index} role="button" onPress={onPress}>
            <Label
              focused={isFocused}
              color={isFocused ? "white" : "lightgray"}
            >
              {label}
            </Label>
          </Pressable>
        );
      })}
    </View>
  );
}
