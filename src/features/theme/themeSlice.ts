import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { LayoutProp } from "../../types";

interface ThemeState {
  themeMode: LayoutProp["name"];
  accentMode: string;
  dimMode: boolean;
}

const initialState: ThemeState = {
  themeMode: "dark",
  accentMode: "#5d68f9",
  dimMode: false,
};

export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
    setAccentMode: (state, action) => {
      state.accentMode = action.payload;
    },
    setDimMode: (state, action) => {
      state.dimMode = action.payload;
    },
  },
});

export const { setThemeMode, setAccentMode, setDimMode } = themeSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default themeSlice.reducer;
