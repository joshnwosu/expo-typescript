import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import GroupCardList from "../../../../layouts/group-card/GroupCardList";
import {
  GroupCardItemProps,
  GroupCardListProps,
  GroupCardProps,
} from "../../../../../types";
import CustomSwitch from "../../../../common/CustomSwitch";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import {
  setDimBrightness,
  setDimMode,
} from "../../../../../features/theme/themeSlice";
import * as Brightness from "expo-brightness";
import Slider from "@react-native-community/slider";
import ThemeContext from "../../../../context/ThemeContext";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const BrightnessMode = () => {
  const dispatch = useAppDispatch();
  const { dimMode, dimBrightness } = useAppSelector((state) => state.theme);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        Brightness.setSystemBrightnessAsync(dimBrightness);
      }
    })();
  }, []);

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const night: GroupCardListProps["data"] = [
    {
      component: (
        <View
          style={{
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Slider
            style={{ width: SCREEN_WIDTH - 120, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={colors.primary}
            // maximumTrackTintColor={colors.inactive}
            // value={dimBrightness}
            onValueChange={(value) => {
              // console.log(value);
              Brightness.setSystemBrightnessAsync(Number(value));
            }}
            onSlidingComplete={(value) => {
              dispatch(setDimBrightness(value));
            }}
            tapToSeek={true}
          />
        </View>
      ),
    },
    // {
    //   name: "Dim mode",
    //   icon: "cloud-sunny",
    //   message: (
    //     <CustomSwitch
    //       value={dimMode}
    //       onValueChange={() => {
    //         dispatch(setDimMode(!dimMode));
    //       }}
    //     />
    //   ),
    // },
  ];

  return (
    <GroupCardList
      title="Brightness"
      description="Adjusts phone's brightness."
      data={night}
    />
  );
};

export default BrightnessMode;

const styles = StyleSheet.create({});
