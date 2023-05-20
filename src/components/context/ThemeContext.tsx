import React from "react";
import { colors } from "../../types";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
  colors: colors;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

export default ThemeContext;
