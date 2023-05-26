import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import SvgIcon from "../../common/icons";
import { getStyle } from "./styles";
import { Ionicons } from "@expo/vector-icons";
// import { GroupCardItemProps } from "../../../types";

interface GroupCardItemProps {
  name: string;
  icon: string;
  clickable?: boolean;
  description: string;
  index: string | number;
  length: number;
}

export default function Item(item: GroupCardItemProps) {
  const { icon, name, clickable, description, index, length } = item;
  const styles = getStyle();

  const renderDescription = () => {
    if (description) {
      return <Text style={styles.item_text_description}>{description}</Text>;
    }
    return null;
  };

  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.item_icon_container}>
        <SvgIcon
          icon={icon}
          fill={styles.item_icon.color}
          width={styles.item_icon.width}
          height={styles.item_icon.height}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <View style={styles.item_text_container}>
          <Text style={styles.item_text}>{name}</Text>
          {renderDescription()}
        </View>
        {clickable && (
          <Ionicons
            name="chevron-forward-outline"
            style={styles.item_clickable}
          />
        )}
        {index !== length - 1 && <View style={styles.item_border} />}
      </View>
    </TouchableOpacity>
  );
}
