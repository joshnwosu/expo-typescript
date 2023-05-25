import { StyleSheet } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export const getStyle = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors;

  const styles = StyleSheet.create({
    // GroupCard style
    group_card: {
      backgroundColor: colors.card,
      marginBottom: 10,
      borderRadius: 10,
      // padding: 10,
    },

    // Item style
    item: {
      flexDirection: "row",
      alignItems: "center",
    },
    item_icon_container: {
      width: 30,
      height: 30,
      marginHorizontal: 20,
    },
    item_icon: {
      color: colors.primary,
    },
    item_text_container: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingVertical: 15,
    },
    item_text: {
      color: colors.text,
      fontSize: 14,
      fontWeight: "300",
    },
  });

  return styles;
};
