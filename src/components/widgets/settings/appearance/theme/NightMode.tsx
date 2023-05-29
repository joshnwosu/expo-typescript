import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
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
import Slider from "@react-native-community/slider";
import ThemeContext from "../../../../context/ThemeContext";

const NightMode = () => {
  const dispatch = useAppDispatch();
  const { dimMode } = useAppSelector((state) => state.theme);
  const [nightMode, setNightMode] = useState(false);

  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const night: GroupCardListProps["data"] = [
    {
      name: "Night mode",
      icon: "moon",
      message: <CustomSwitch value={nightMode} onValueChange={setNightMode} />,
    },
    {
      name: "Dim mode",
      icon: "cloud-sunny",
      message: (
        <CustomSwitch
          value={dimMode}
          onValueChange={() => {
            dispatch(setDimMode(!dimMode));
          }}
        />
      ),
      // description: "Applies a warmer color tone to the app interface.",
    },
    {
      component: (
        <View
          style={{
            padding: 20,
          }}
        >
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={colors.primary}
            // maximumTrackTintColor={colors.inactive}
            onValueChange={(value) => {
              dispatch(setDimBrightness(Number(value * 99).toFixed(0)));
              // console.log(value * 99);
            }}
          />
        </View>
      ),
    },
  ];

  return (
    <GroupCardList
      title="Night Mode"
      description="Night mode will effect notes appearance and general system appearance at the same time."
      data={night}
    />
  );
};

export default NightMode;

const styles = StyleSheet.create({});
