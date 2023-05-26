import { View, Text } from "react-native";
import React from "react";
import Item from "./Item";
import { GroupCardProps } from "../../../types";
import { getStyle } from "./styles";

export default function GroupCard({ title, data }: GroupCardProps) {
  const styles = getStyle();
  return (
    <View style={styles.group_card_container}>
      <View style={styles.group_card_title_container}>
        <Text style={styles.group_card_title}>{title}</Text>
      </View>
      <View style={styles.group_card}>
        {data?.map(({ name, icon, description }, index) => {
          return (
            <Item
              key={index.toString()}
              name={name}
              icon={icon}
              description={description}
              index={index}
              length={data?.length}
            />
          );
        })}
      </View>
    </View>
  );
}
