import { View, Text } from "react-native";
import React from "react";
import { getStyle } from "./styles";
import { GroupCardProps } from "../../../types";

export default function GroupCard({
  title,
  titleButton,
  titleButtonPostition,
  description,
  children,
}: GroupCardProps) {
  const styles = getStyle();
  const renderGroupTitle = () => {
    if (title) {
      return (
        <View
          style={[
            styles.group_card_title_container,
            {
              justifyContent:
                titleButtonPostition === "left"
                  ? "flex-start"
                  : "space-between",
            },
          ]}
        >
          <Text style={styles.group_card_title}>{title}</Text>
          {titleButton ? <>{titleButton}</> : null}
        </View>
      );
    }
    return null;
  };
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
      {renderGroupTitle()}
      <View style={styles.group_card}>{children}</View>
      {renderGroupDescription()}
    </View>
  );
}
