import { StyleSheet } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export const getStyle = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme.colors;

  const styles = StyleSheet.create({
    // Card style
    card: {
      backgroundColor: colors.card,
      marginBottom: 10,
      borderRadius: 10,
      padding: 10,
    },

    // Item style
    item: {
      color: colors.primary,
    },
  });

  return styles;
};
