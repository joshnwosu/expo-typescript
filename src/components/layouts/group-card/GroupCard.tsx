import { View, Text } from "react-native";
import React from "react";
import { getStyle } from "./styles";
import { GroupCardProps } from "../../../types";

export default function GroupCard({
  title,
  description,
  children,
}: GroupCardProps) {
  const styles = getStyle();
  const renderGroupDescription = () => {
    if (description) {
      return (
        <View style={styles.group_card_description_container}>
          <Text style={styles.group_card_description}>{description}</Text>
        </View>
      );
    }
    return null;
  };
  return (
    <View style={styles.group_card_container}>
      <View style={styles.group_card_title_container}>
        <Text style={styles.group_card_title}>{title}</Text>
      </View>
      <View style={styles.group_card}>{children}</View>
      {renderGroupDescription()}
    </View>
  );
}
