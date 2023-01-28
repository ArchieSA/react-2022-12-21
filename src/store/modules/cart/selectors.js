import { cartEntitySelectors } from '.';

export const selectCart = (state) => state.cart;

export const selectCartDishIds = (state) =>
  cartEntitySelectors.selectIds(selectCart(state));

export const selectDishCountByName = (state, { dishId }) =>
  cartEntitySelectors.selectById(selectCart(state), dishId)?.count || 0;
