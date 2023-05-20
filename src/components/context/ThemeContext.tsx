import React from "react";
import { ThemeMode } from "../../types";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
  themeMode: ThemeMode;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

export default ThemeContext;
