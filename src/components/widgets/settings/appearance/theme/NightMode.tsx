import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";
import GroupCardList from "../../../../layouts/group-card/GroupCardList";
import { GroupCardProps } from "../../../../../types";

const night: GroupCardProps["data"] = [
  {
    name: "Night mode",
    icon: "moon",
    message: <Switch />,
  },
  {
    name: "Dim mode",
  },
];

const NightMode = () => {
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
