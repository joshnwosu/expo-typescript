import { View, Text } from "react-native";
import React from "react";
import GroupCardItem from "./GroupCardItem";
import { GroupCardItemProps, GroupCardListProps } from "../../../types";
import { getStyle } from "./styles";
import GroupCard from "./GroupCard";

export default function GroupCardList({
  title,
  description,
  data,
  primary_color,
}: GroupCardListProps) {
  const styles = getStyle();
  return (
    <GroupCard title={title} description={description}>
      {data?.map((item: GroupCardItemProps["item"], index) => {
        return (
          <GroupCardItem
            key={index.toString()}
            item={{ ...item, icon_color: item.icon_color || primary_color }}
            index={index}
            length={data?.length}
          />
        );
      })}
    </GroupCard>
  );
}
