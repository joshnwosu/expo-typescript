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

const NightMode = () => {
  const dispatch = useAppDispatch();
  const { dimMode, dimBrightness } = useAppSelector((state) => state.theme);
  const [nightMode, setNightMode] = useState(false);

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
