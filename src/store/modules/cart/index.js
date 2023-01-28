import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const cartEntityAdapter = createEntityAdapter();
export const cartEntitySelectors = cartEntityAdapter.getSelectors();

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartEntityAdapter.getInitialState(),
  reducers: {
    add: (state, { payload }) => {
      const dish = cartEntitySelectors.selectById(state, payload);
      if (!dish) {
        cartEntityAdapter.addOne(state, { id: payload, count: 1 });
      } else {
        cartEntityAdapter.setOne(state, { ...dish, count: dish.count + 1 });
      }
    },
    remove: (state, { payload }) => {
      const dish = cartEntitySelectors.selectById(state, payload);
      if (!dish) {
        return;
      } else {
        cartEntityAdapter.setOne(state, {
          ...dish,
          count: dish.count > 0 ? dish.count - 1 : 0,
        });
      }
    },
    clear: (state) => {
      cartEntityAdapter.removeAll(state);
    },
  },
});

export const cartActions = cartSlice.actions;
