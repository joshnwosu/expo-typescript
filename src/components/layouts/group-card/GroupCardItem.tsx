import { TouchableOpacity, View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import SvgIcon from "../../common/icons";
import { getStyle } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { GroupCardItemProps } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from "../../context/ThemeContext";
import { IconName } from "../../../types/icon";

export default function GroupCardItem({
  item,
  index,
  length,
}: GroupCardItemProps) {
  const { mode } = useContext(ThemeContext);
  const navigation = useNavigation<any>();
  const { clickable, component, description, icon, message, name, icon_color } =
    item;
  const styles = getStyle();

  const renderIcon = () => {
    if (typeof icon === "string") {
      return (
        <View style={styles.item_icon_container}>
          <SvgIcon
            icon={icon as IconName}
            fill={icon_color || styles.item_icon.color}
            width={styles.item_icon.width}
            height={styles.item_icon.height}
          />
        </View>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (typeof name === "string" || typeof description === "string") {
      return (
        <View style={styles.item_text_container}>
          {renderName()}
          {renderDescription()}
        </View>
      );
    }
    return null;
  };

  const renderName = () => {
    if (typeof name === "string") {
      return <Text style={styles.item_text}>{name}</Text>;
    }
    return null;
  };

  const renderDescription = () => {
    if (typeof description === "string") {
      return <Text style={styles.item_text_description}>{description}</Text>;
    }
    return null;
  };

  const renderMessage = () => {
    if (typeof message === "string" || typeof message === "number") {
      return <Text style={styles.item_message_text}>{message}</Text>;
    }
    return message;
  };

  const renderSeperator = () => {
    if (index !== length - 1) {
      return <View style={styles.item_seperator} />;
    }
    return null;
  };

  const renderClickableIcon = () => {
    if (clickable) {
      return (
        <Ionicons
          name="chevron-forward-outline"
          style={styles.item_clickable}
        />
      );
    }
    return null;
  };

  const renderClickContent = () => {
    if (clickable || message) {
      return (
        <View style={styles.item_clickable_container}>
          {renderMessage()}
          {renderClickableIcon()}
        </View>
      );
    }
    return null;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.item}
      onPress={() => {
        if (clickable) navigation.navigate("Settings Detail", { name: name });
      }}
    >
      <>
        {/* {component ? (
          <View style={styles.item_content}>
            {component}
            {renderSeperator()}
          </View>
        ) : (
          <> */}
        {renderIcon()}
        <View style={styles.item_content}>
          {renderContent()}
          {renderClickContent()}
          {component}
          {renderSeperator()}
        </View>
        {/* </>
        )} */}
      </>
    </TouchableOpacity>
  );
}
