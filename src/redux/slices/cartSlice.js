import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartItems: []
  },
  reducers: {
    allItems: (state, action) => {
        state.items = action.payload;
    },
    addItem: (state, action) => {
        state.items.push(action.payload)
    },
    addItemInCart: (state, action) => {
        state.cartItems.push(action.payload); 
    }
  },
});

export const { allItems, addItem, addItemInCart } = cartSlice.actions;
export default cartSlice.reducer;
