import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, { payload }) {
      state[payload] = (state[payload] || 0) + 1
    },
    remove(state, { payload }) {
      state[payload] = (state[payload] || 1) - 1
    },
    clear(state) {
      return {}
    }
  }
})

export const addDish = cartSlice.actions.add
export const removeDish = cartSlice.actions.remove
export const clearCart = cartSlice.actions.clear