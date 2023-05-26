import { StyleSheet } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export const getStyle = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors;

  const styles = StyleSheet.create({
    // GroupCard style
    group_card_container: {
      marginBottom: 10,
    },
    group_card: {
      backgroundColor: colors.card,
      marginBottom: 10,
      borderRadius: 10,
      // padding: 10,
    },
    group_card_title_container: {
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    group_card_title: {
      color: colors.text,
      fontSize: 14,
      fontWeight: "500",
      textTransform: "uppercase",
      opacity: 0.5,
    },

    // Item style
    item: {
      flexDirection: "row",
      alignItems: "center",
    },
    item_icon_container: {
      width: 30,
      height: 30,
      marginHorizontal: 15,
      justifyContent: "center",
      alignItems: "center",
    },
    item_icon: {
      color: colors.primary,
      width: 24,
      height: 24,
    },
    item_text_container: {
      flex: 1,
      paddingVertical: 14,
      paddingRight: 10,
    },
    item_text: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "300",
    },
    item_text_description: {
      color: colors.text,
      fontSize: 13,
      fontWeight: "400",
      marginTop: 3,
      opacity: 0.5,
    },
    item_clickable_container: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 20,
    },
    item_clickable: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "300",
      opacity: 0.4,
      marginLeft: 10,
    },
    item_border: {
      width: "100%",
      height: 1,
      backgroundColor: colors.border,
      position: "absolute",
      bottom: 0,
      opacity: 0.7,
    },
  });

  return styles;
};
