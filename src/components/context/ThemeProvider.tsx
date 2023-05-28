import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeProps, ThemeObject, LayoutProp } from "../../types";
import { useColorScheme } from "react-native";
import { useAppSelector } from "../../app/hooks";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { themeMode, accentMode } = useAppSelector((state) => state.theme);
  const scheme = useColorScheme();
  const [mode, setMode] = useState<LayoutProp["name"]>(themeMode); // Initial theme state

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
        topSeperator: "#d8d8d8",
        bottomSeperator: "#d8d8d8",
      },
    },
    dark: {
      dark: true,
      colors: {
        background: "#010101",
        border: "#272729",
        card: "#141414",
        notification: "#ff453a",
        primary: accentMode,
        text: "#e5e5e7",
        inactive: "#6d6f7a",
        topSeperator: "#040404",
        bottomSeperator: "#242424",
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
