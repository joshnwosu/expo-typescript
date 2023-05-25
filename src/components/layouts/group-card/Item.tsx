import { View, Text } from "react-native";
import React from "react";
import SvgIcon from "../../common/icons";
import { getStyle } from "./styles";

export default function Item({ icon, name, index, length }) {
  const styles = getStyle();
  return (
    <View style={styles.item}>
      <View style={styles.item_icon_container}>
        <SvgIcon icon={icon} fill={styles.item_icon.color} />
      </View>
      <View
        style={[
          styles.item_text_container,
          {
            borderBottomWidth: index === length - 1 ? 0 : 1,
          },
        ]}
      >
        <Text style={styles.item_text}>{name}</Text>
      </View>
    </View>
  );
}
