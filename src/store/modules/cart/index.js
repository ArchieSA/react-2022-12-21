import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addDish(state, action) {
      state[action.payload] = (state[action.payload] || 0 + 1)
    },

    removeDish(state, action) {
      state[action.payload] = (state[action.payload] || 1) - 1
    },

    clearCart(state) {
      return {}
    }
  }
})
 export const {addDish, removeDish, clearCart}  = cartSlice.actions
