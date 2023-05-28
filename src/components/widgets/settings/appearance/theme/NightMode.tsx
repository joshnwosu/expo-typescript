import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GroupCardList from "../../../../layouts/group-card/GroupCardList";
import { GroupCardProps } from "../../../../../types";
import CustomSwitch from "../../../../common/CustomSwitch";

const NightMode = () => {
  const [nightMode, setNightMode] = useState(false);
  const [dimMode, setDimMode] = useState(false);

  const night: GroupCardProps["data"] = [
    {
      name: "Night mode",
      icon: "moon",
      message: <CustomSwitch value={nightMode} onValueChange={setNightMode} />,
    },
    {
      name: "Dim mode",
      message: <CustomSwitch value={dimMode} onValueChange={setDimMode} />,
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
