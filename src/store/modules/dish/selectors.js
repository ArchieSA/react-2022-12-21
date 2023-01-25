import { LOADING_STATUSES } from "../../constants/loadingStatuses";

export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, { dishId }) =>
  selectDishModule(state).entities[dishId];

export const selectDishIds = (state) =>
  selectDishModule(state).ids;

export const selectDishLoadingStatus =
  (state) => selectDishModule(state).loadingStatus;

export const selectIsDishLoading =
  (state) => selectDishLoadingStatus(state) === LOADING_STATUSES.loading;
