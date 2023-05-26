import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import SvgIcon from "../../common/icons";
import { getStyle } from "./styles";

export default function Item({ icon, name, description, index, length }) {
  const styles = getStyle();
  return (
    <>
      <TouchableOpacity style={styles.item}>
        <View style={styles.item_icon_container}>
          <SvgIcon
            icon={icon}
            fill={styles.item_icon.color}
            width={styles.item_icon.width}
            height={styles.item_icon.height}
          />
        </View>
        <View style={[styles.item_text_container]}>
          <Text style={styles.item_text}>{name}</Text>
          {description && (
            <Text style={styles.item_text_description}>{description}</Text>
          )}
          {index !== length - 1 && <View style={styles.item_border} />}
        </View>
      </TouchableOpacity>
    </>
  );
}
