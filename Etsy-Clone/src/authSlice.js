import { createSlice } from '@reduxjs/toolkit';

// Function to get user data from localStorage
const getUserDataFromLocalStorage = () => {
  const userData = localStorage.getItem("userData");
  // Check if userData is valid before parsing
  return userData ? JSON.parse(userData) : null;
};

// Initial state
const initialState = {
  userData: getUserDataFromLocalStorage(),
  isLoggedIn: !!getUserDataFromLocalStorage(), // Check if userData exists to set isLoggedIn
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserData: (state, action) => {
      // Check if action.payload is valid
      if (action.payload) {
        localStorage.setItem("userData", JSON.stringify(action.payload));
        state.userData = action.payload;
        state.isLoggedIn = true; // Set isLoggedIn to true when user data is added
      } else {
        console.warn('Adding user data: undefined');
      }
    },
    removeUserData: (state) => {
      localStorage.removeItem("userData");
      state.userData = null;
      state.isLoggedIn = false; // Set isLoggedIn to false when user data is removed
    },
  },
});

// Export actions and reducer
export const { addUserData, removeUserData } = authSlice.actions;
export default authSlice.reducer;
