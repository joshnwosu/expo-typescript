import React from "react";
import { ThemeProps } from "../../types";

interface ThemeContextProps {
  mode: string;
  toggleTheme: () => void;
  theme: ThemeProps;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

export default ThemeContext;
