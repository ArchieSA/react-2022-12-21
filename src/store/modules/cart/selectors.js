const EMPTY_OBJECT = {};
const EMPTY_ARRAY = [];

export const selectCart = (state) => state.cart;

export const selectCartDishIds = (state) => Object.keys(selectCart(state));

export const selectDishCountByName = (state, { dishId }) =>
  selectCart(state)[dishId] || 0;
