import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GistData } from "src/types/GistData";

interface Pages {
  page?: number;
  inPage?: number;
}

export interface GistsState {
  isLoading: boolean;
  gists: GistData[];
  error?: string;
  pages?: Pages;
}

const initialState: GistsState = {
  isLoading: true,
  gists: [],
  pages: {
    page: 0,
    inPage: 0
  }
};

const gistsSlice = createSlice({
  name: "gists",
  initialState,
  reducers: {
    setGists(state: GistsState, action: PayloadAction<GistData[]>) {
      const { json, page, inPage } = action.payload;
      state.isLoading = false;
      state.gists = json;
      state.pages = {
        page,
        inPage
      };
    },

    setGistsError(state: GistsState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { setGists, setGistsError } = gistsSlice.actions;
export const gistsReducer = gistsSlice.reducer;
