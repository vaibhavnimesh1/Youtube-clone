import { createSlice } from "@reduxjs/toolkit";

const cacheSlices = createSlice({
  name: "cache",
  initialState: {
    vaibahv: ["acagha"],
  },
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = cacheSlices.actions;
export default cacheSlices.reducer;
