import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    add: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1
    },
    remove: (state, action) => {
      state[action.payload] = (state[action.payload] || 1) - 1
    },
    clear: (state) => state = {},
  },
});


/*
import { CART_ACTIONS } from './actions';

export const cartReducer = (state = {}, action) => {
  console.log('action: ', action);
  switch (action?.type) {
    case CART_ACTIONS.add: {
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    }
    case CART_ACTIONS.remove: {
      return {
        ...state,
        [action.payload]: (state[action.payload] || 1) - 1,
      };
    }
    case CART_ACTIONS.clear: {
      return {};
    }
    default:
      return state;
  }
};
*/