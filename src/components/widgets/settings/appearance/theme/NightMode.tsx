import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GroupCardList from "../../../../layouts/group-card/GroupCardList";
import { GroupCardProps } from "../../../../../types";
import CustomSwitch from "../../../../common/CustomSwitch";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { setDimMode } from "../../../../../features/theme/themeSlice";

const NightMode = () => {
  const dispatch = useAppDispatch();
  const { dimMode } = useAppSelector((state) => state.theme);
  const [nightMode, setNightMode] = useState(false);

  const night: GroupCardProps["data"] = [
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
      description: "Applies a warmer color tone to the app interface.",
    },
  ];

  return (
    <GroupCardList
      title="Night Mode"
      description="These modes will effect notes appearance and general system appearance at the same time."
      data={night}
    />
  );
};

export default NightMode;

const styles = StyleSheet.create({});
