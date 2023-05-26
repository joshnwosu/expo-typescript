import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import SvgIcon from "../../common/icons";
import { getStyle } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { GroupCardItemProps } from "../../../types";
import { useNavigation } from "@react-navigation/native";
// import { GroupCardItemProps } from "../../../types";

export default function Item(item: GroupCardItemProps) {
  const navigation = useNavigation<any>();
  const { icon, name, clickable, description, message, index, length } = item;
  const styles = getStyle();

  const renderDescription = () => {
    if (description) {
      return (
        <Text numberOfLines={1} style={styles.item_text_description}>
          {description}
        </Text>
      );
    }
    return null;
  };

  const renderMessage = () => {
    if (typeof message === "string") {
      return <Text style={styles.item_text}>{message}</Text>;
    }
    return message;
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (clickable) navigation.navigate("Settings Detail", { name: name });
      }}
    >
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
          <View style={styles.item_clickable_container}>
            {renderMessage()}
            <Ionicons
              name="chevron-forward-outline"
              style={styles.item_clickable}
            />
          </View>
        )}
        {index !== length - 1 && <View style={styles.item_border} />}
      </View>
    </TouchableOpacity>
  );
}
