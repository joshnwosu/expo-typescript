import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React, { useContext } from "react";
import BulletLayout from "../components/layouts/BulletEditLayout";
import SharedElementLayout from "../components/layouts/SharedElementLayout";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import ThemeContext from "../components/context/ThemeContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SvgIcon from "../components/common/icons";

export default function CreateScreen({ navigation }) {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      {/* <BulletLayout />
      <SharedElementLayout /> */}

      <View
        style={{
          // backgroundColor: colors.primary,
          padding: 15,
          paddingTop: Constants.statusBarHeight + 10,
        }}
      >
        <Ionicons
          name="chevron-back"
          color={colors.text}
          size={25}
          onPress={() => navigation.goBack()}
        />
      </View>
      {/* <KeyboardAvoidingView style={{ flex: 1}} > */}
      <BulletLayout />
      {/* </KeyboardAvoidingView> */}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={-insets.bottom}
      >
        <View
          style={{
            backgroundColor: colors.border,
            height: insets.bottom + 50,
            width: "100%",
            flexDirection: "row",
            // paddingHorizontal: 20,

            paddingBottom: insets.bottom,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Ionicons name="text-outline" color={colors.text} size={25} />
          <Ionicons name="list-outline" color={colors.text} size={25} />
          <Ionicons
            name="color-palette-outline"
            color={colors.text}
            size={25}
          />
          <Ionicons name="bookmark-outline" color={colors.text} size={25} />
          <Ionicons
            name="ellipsis-vertical-outline"
            color={colors.text}
            size={25}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
