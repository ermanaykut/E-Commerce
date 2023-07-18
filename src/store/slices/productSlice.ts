import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    saveProducts: (state, action) => {
      return action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export default productSlice.reducer;
export const {saveProducts} = productSlice.actions;