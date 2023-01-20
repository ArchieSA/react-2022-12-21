export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) =>
  selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantMenuById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestauranReviewsById = (state, { restaurantId }) =>
  selectRestaurantModule(state).entities[restaurantId].reviews;
