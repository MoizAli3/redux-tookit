import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  cartItems: [],
};

// Create the slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload); // Add item to the cart
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // Remove item by id
    },
  },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export reducer to be used in the store
export default cartSlice.reducer;
