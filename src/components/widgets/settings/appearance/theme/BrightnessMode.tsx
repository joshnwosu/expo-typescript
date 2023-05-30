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
import SvgIcon from "../../../../common/icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const BrightnessMode = () => {
  const dispatch = useAppDispatch();
  const { dimBrightness } = useAppSelector((state) => state.theme);
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        const b = await Brightness.getBrightnessAsync();
        Brightness.setSystemBrightnessAsync(5);
        setSliderValue(b);
      }
    })();
  }, []);

  const night: GroupCardListProps["data"] = [
    {
      component: (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 5,
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 20,
          }}
        >
          <SvgIcon icon="sunny-low" fill={colors.inactive} />
          <Slider
            style={{ width: SCREEN_WIDTH - 140, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={colors.primary}
            // maximumTrackTintColor={colors.inactive}
            value={sliderValue}
            onValueChange={(value) => {
              // console.log(value);
              Brightness.setSystemBrightnessAsync(Number(value));
            }}
            onSlidingComplete={(value) => {
              dispatch(setDimBrightness(value));
            }}
            tapToSeek={true}
          />
          <SvgIcon icon="sunny" fill={colors.inactive} />
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
      description="Adjusts phone's brightness. This will effect the brightness of your phone."
      data={night}
    />
  );
};

export default BrightnessMode;

const styles = StyleSheet.create({});
