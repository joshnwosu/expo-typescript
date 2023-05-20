import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeProps, ThemeObject } from "../../types";
import { useColorScheme } from "react-native";
import { Theme } from "../config/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const scheme = useColorScheme();
  const [mode, setMode] = useState(scheme); // Initial theme state

  const toggleTheme = () => {
    setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Toggle between light and dark theme
  };

  React.useEffect(() => {
    setMode(scheme);
  }, [scheme]);

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
