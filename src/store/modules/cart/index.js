import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const cartEntityAdapter = createEntityAdapter();

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartEntityAdapter.getInitialState(),
  reducers: {
    add: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    remove: (state, { payload }) => {
      state[payload] = (state[payload] || 1) - 1;
    },
    clear: () => cartEntityAdapter.getInitialState(),
  },
});
