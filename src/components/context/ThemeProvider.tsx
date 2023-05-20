import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import { colors, ThemeObject } from "../../types";
import { useColorScheme } from "react-native";
import { Theme } from "../config/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme); // Initial theme state

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Toggle between light and dark theme
  };

  React.useEffect(() => {
    setTheme(scheme);
  }, [scheme]);

  // Define your theme object with colors, typography, etc.
  const themeObject: ThemeObject = {
    ...Theme,
  };

  const colors: colors = {
    ...themeObject.colors[theme],
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
