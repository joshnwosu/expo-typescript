import { View, Text } from "react-native";
import React from "react";
import GroupCardItem from "./GroupCardItem";
import { GroupCardItemProps, GroupCardListProps } from "../../../types";
import { getStyle } from "./styles";
import GroupCard from "./GroupCard";

export default function GroupCardList({
  title,
  titleButton,
  description,
  data,
  list_color,
  list_clickable,
  titleButtonPostition,
  onPress,
}: GroupCardListProps) {
  const styles = getStyle();
  return (
    <GroupCard
      title={title}
      titleButton={titleButton}
      titleButtonPostition={titleButtonPostition}
      description={description}
    >
      {data?.map((item: GroupCardItemProps["item"], index) => {
        return (
          <GroupCardItem
            key={index.toString()}
            item={{
              ...item,
              icon_color: item.icon_color || list_color,
              clickable: item.clickable || list_clickable,
              onPress: item.onPress || onPress,
            }}
            index={index}
            length={data?.length}
          />
        );
      })}
    </GroupCard>
  );
}
