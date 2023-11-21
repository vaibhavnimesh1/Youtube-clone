import { createSlice } from "@reduxjs/toolkit";

const livechat = createSlice({
  name: "livechat",
  initialState: {
    
      messages: [],
    }
  ,
  reducers: {
    livetext: (state, action) => {
      (state.messages.splice(20,1))
      state.messages.unshift(action.payload);
    },
  },
});

export const { livetext } = livechat.actions;
export default livechat.reducer;
