import { TouchableOpacity, View, Text } from "react-native";
import React, { useContext } from "react";
import SvgIcon from "../../common/icons";
import { getStyle } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { GroupCardItemProps } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../context/ThemeContext";

export default function Item(item: GroupCardItemProps) {
  const { mode } = useContext(ThemeContext);
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

  const renderSeperator = () => {
    if (index !== length - 1 && mode === "dark") {
      return (
        <>
          <View style={styles.item_border} />
          <View style={[styles.item_border, styles.item_border_mt]} />
        </>
      );
    }
    return <View style={styles.item_border} />;
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
        {renderSeperator()}
      </View>
    </TouchableOpacity>
  );
}
