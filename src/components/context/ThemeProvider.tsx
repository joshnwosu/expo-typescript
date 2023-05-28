import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeProps, ThemeObject, LayoutProp } from "../../types";
import { useColorScheme } from "react-native";
import { Theme } from "../config/theme";
import { useAppSelector } from "../../app/hooks";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { themeMode } = useAppSelector((state) => state.theme);
  const scheme = useColorScheme();
  const [mode, setMode] = useState<LayoutProp["name"]>(themeMode); // Initial theme state
  const [accent, setAccent] = useState(""); // Initial accent state

  const toggleTheme = () => {
    if (themeMode === "system") {
      setMode(scheme);
    } else {
      setMode(themeMode);
    }
  };

  const toggleAccent = (value: string) => {
    setAccent(value);
  };

  React.useEffect(() => {
    toggleTheme();
  }, [scheme, themeMode]);

  // Define your theme object with colors, typography, etc.
  const themeObject: ThemeObject = {
    ...Theme,
  };

  const theme: ThemeProps = {
    ...themeObject[mode],
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
