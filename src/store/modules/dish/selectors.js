export const selectDishModule = (state) => state.dish;

export const selectDishById = (dishId) => (state) =>
  selectDishModule(state).entities[dishId];
