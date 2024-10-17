// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice'; // Import the favorites reducer
import authReducer from './authSlice'; // Use 'authReducer' instead of 'authSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer, // Add the favorites reducer
    auth: authReducer, // Change to 'auth' for better clarity
  },
});

export default store;
