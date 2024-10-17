import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
        } else {
          state.totalQuantity -= existingItem.quantity;
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
