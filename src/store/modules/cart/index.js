import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        [action.payload]: (state[action.payload] || 1) - 1,
      };
    },
    clear: () => {
      return {};
    }
  }
});
