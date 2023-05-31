import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { AccentColor, BackgroundProps } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ThemeState {
  themeMode: BackgroundProps["name"];
  accentMode: AccentColor;
  dimMode: boolean;
  dimBrightness: number;
}

const initialState: ThemeState = {
  themeMode: "dark",
  accentMode: "#5d68f9",
  dimMode: false,
  dimBrightness: 0,
};

export const setThemeModeAsync = createAsyncThunk(
  "theme/setThemeModeAsync",
  async (theme: BackgroundProps["name"], { getState }) => {
    try {
      await AsyncStorage.setItem("theme", theme);
      return theme;
    } catch (error) {
      console.error("Error while setting theme mode:", error);
      throw error;
    }
  }
);

export const setAccentModeAsync = createAsyncThunk(
  "theme/setAccentModeAsync",
  async (accent: AccentColor, { getState }) => {
    try {
      await AsyncStorage.setItem("accent", accent);
      return accent;
    } catch (error) {
      console.error("Error while setting accent mode:", error);
      throw error;
    }
  }
);

export const getStoredTheme = createAsyncThunk(
  "theme/getStoredTheme",
  async () => {
    try {
      const storedTheme = await AsyncStorage.getItem("theme");
      const storedAccent = await AsyncStorage.getItem("accent");

      return {
        themeMode: (storedTheme as BackgroundProps["name"]) || "dark",
        accentMode: (storedAccent as AccentColor) || "#5d68f9",
      }; // Return the stored theme if it exists, otherwise use a default value
    } catch (error) {
      console.error("Error while retrieving stored theme:", error);
      throw error;
    }
  }
);

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDimMode: (state, action: PayloadAction<boolean>) => {
      state.dimMode = action.payload;
    },
    setDimBrightness: (state, action: PayloadAction<number>) => {
      state.dimBrightness = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setThemeModeAsync.fulfilled, (state, action) => {
        state.themeMode = action.payload;
      })
      .addCase(setAccentModeAsync.fulfilled, (state, action) => {
        state.accentMode = action.payload;
      })
      .addCase(getStoredTheme.fulfilled, (state, action) => {
        state.themeMode = action.payload.themeMode;
        state.accentMode = action.payload.accentMode;
      });
  },
});

export const { setDimMode, setDimBrightness } = themeSlice.actions;

export const selectThemeMode = (state: RootState) => state.theme.themeMode;

export default themeSlice.reducer;
