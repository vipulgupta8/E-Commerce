// src/favoritesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      const existingProduct = state.favoriteItems.find((item) => item.id === product.id);

      if (!existingProduct) {
        state.favoriteItems.push(product);
      }
    },
    removeFromFavorites: (state, action) => {
      const id = action.payload;
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
