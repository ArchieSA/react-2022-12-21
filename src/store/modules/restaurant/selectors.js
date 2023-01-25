import { LOADING_STATUSES } from "../../constants/loadingStatuses";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) =>
  selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantMenuById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantReviewsById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantLoadingStatus = (state) => selectRestaurantModule(state).loadingStatus;

export const selectIsRestaurantLoading = (state) => selectRestaurantLoadingStatus(state) === LOADING_STATUSES.loading;
