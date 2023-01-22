export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, { dishId }) =>
  selectDishModule(state).entities[dishId];
