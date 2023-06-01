import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeProps, ThemeObject, BackgroundProps } from "../../types";
import { useColorScheme } from "react-native";
import { useAppSelector } from "../../app/hooks";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { themeMode, accentMode } = useAppSelector((state) => state.theme);
  const scheme = useColorScheme();
  const [mode, setMode] = useState<BackgroundProps["name"]>(themeMode); // Initial theme state

  const toggleTheme = () => {
    if (themeMode === "system") {
      setMode(scheme);
    } else {
      setMode(themeMode);
    }
  };

  React.useEffect(() => {
    toggleTheme();
  }, [scheme, themeMode]);

  // Define your theme object with colors, typography, etc.
  const themeObject: ThemeObject = {
    light: {
      dark: false,
      colors: {
        background: "#f2f2f2",
        border: "#eeeeee",
        card: "#ffffff",
        notification: "#ff3b30",
        primary: accentMode,
        text: "#1c1c1e",
        inactive: "#6d6f7a",
      },
    },
    dark: {
      dark: true,
      colors: {
        background: "#171717",
        border: "#212121",
        card: "#1F1F1F",
        notification: "#ff453a",
        primary: accentMode,
        text: "#e5e5e7",
        inactive: "#6d6f7a",
      },
    },
  };
  const theme: ThemeProps = {
    ...themeObject[mode],
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
