import { View, Text } from "react-native";
import React from "react";
import SvgIcon from "../../common/icons";
import { getStyle } from "./styles";

export default function Item({ icon, name }) {
  const styles = getStyle();
  return (
    <View>
      <SvgIcon icon={icon} />
      <Text style={styles.item}>{name}</Text>
    </View>
  );
}
