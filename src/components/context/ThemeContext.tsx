import React from "react";
import { LayoutProp, ThemeProps } from "../../types";

interface ThemeContextProps {
  mode: string;
  toggleTheme: (value: LayoutProp["name"]) => void;
  theme: ThemeProps;
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);

export default ThemeContext;
