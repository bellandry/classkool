import { createSlice } from "@reduxjs/toolkit";

export interface OpenSheetState {
  value: boolean;
}

const initialState: OpenSheetState = {
  value: false,
};

export const openSheetSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setIsOpen } = openSheetSlice.actions;

export default openSheetSlice.reducer;
