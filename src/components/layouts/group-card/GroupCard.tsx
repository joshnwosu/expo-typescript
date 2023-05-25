import { View, Text } from "react-native";
import React from "react";
import Item from "./Item";
import { GroupCardProps } from "../../../types";
import { getStyle } from "./styles";

export default function GroupCard({ data }: GroupCardProps) {
  const styles = getStyle();
  return (
    <View style={styles.card}>
      {data?.map(({ name, icon }, index) => {
        return <Item key={index.toString()} name={name} icon={icon} />;
      })}
    </View>
  );
}
