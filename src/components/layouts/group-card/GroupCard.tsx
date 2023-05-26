import { View, Text } from "react-native";
import React from "react";
import { getStyle } from "./styles";

interface Props {
  title?: string;
  children: JSX.Element | React.ReactNode;
}

export default function GroupCard({ title, children }: Props) {
  const styles = getStyle();
  return (
    <View style={styles.group_card_container}>
      <View style={styles.group_card_title_container}>
        <Text style={styles.group_card_title}>{title}</Text>
      </View>
      <View style={styles.group_card}>{children}</View>
    </View>
  );
}
