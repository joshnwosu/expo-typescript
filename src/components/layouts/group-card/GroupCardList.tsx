import { View, Text } from "react-native";
import React from "react";
import GroupCardItem from "./GroupCardItem";
import { GroupCardProps } from "../../../types";
import { getStyle } from "./styles";
import GroupCard from "./GroupCard";

export default function GroupCardList({
  title,
  description,
  data,
}: GroupCardProps) {
  const styles = getStyle();
  return (
    <GroupCard title={title} description={description}>
      {data?.map(({ name, icon, clickable, description, message }, index) => {
        return (
          <GroupCardItem
            key={index.toString()}
            name={name}
            icon={icon}
            description={description}
            message={message}
            index={index}
            length={data?.length}
            clickable={clickable}
          />
        );
      })}
    </GroupCard>
  );
}
