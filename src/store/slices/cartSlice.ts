import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let arr: any = state;
      const index = arr?.findIndex(
        (x: any) => x.item.id === action?.payload?.id,
      );
      if (index == -1) arr.push({item: action?.payload, amount: 1});
      else arr[index] = {...arr[index], amount: arr[index].amount + 1};
      return arr;
    },
    decreaseToAmount: (state, action) => {
      let arr: any = state;
      const index = arr?.findIndex(
        (x: any) => x.item.id === action?.payload?.id,
      );
      if (arr[index].amount > 1) {
        arr[index] = {...arr[index], amount: arr[index].amount - 1};
      } else arr = arr?.filter((x: any) => x.item.id != action?.payload?.id);
      return arr;
    },
    increaseToAmount: (state, action) => {
      let arr: any = state;
      const index = arr?.findIndex(
        (x: any) => x.item.id === action?.payload?.id,
      );
      arr[index] = {...arr[index], amount: arr[index].amount + 1};
      return arr;
    },
    clearCart : () => {
     return []
    }
  },
});

// Action creators are generated for each case reducer function
export default cartSlice.reducer;
export const {addToCart, decreaseToAmount, increaseToAmount,clearCart} =
  cartSlice.actions;