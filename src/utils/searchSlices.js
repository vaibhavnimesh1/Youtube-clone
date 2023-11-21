import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
  name:'search',
  initialState: {
   
  },
  reducers: {
    
    searchItem : (state,action)=>{
      state = state.action.payload
    }
},
});

export const  { searchItem} = searchSlices.actions
export default searchSlices.reducer;
