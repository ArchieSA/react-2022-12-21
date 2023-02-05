import { entitySelectors } from '.';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';

export const selectDishModule = (state) => state.dish;

export const selectDishEntities = (state) => state.dish.entities;

export const selectDishById = (state, { dishId }) =>
  entitySelectors.selectById(selectDishModule(state), dishId);

export const selectDishIds = (state) =>
  entitySelectors.selectIds(selectDishModule(state));

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).loadingStatus;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectIsDishSuccessLoaded = (state) =>
  selectDishLoadingStatus(state) === LOADING_STATUSES.success;
export const selectIsAllDishLoading = (state) =>
  selectDishModule(state).allLoaded;

export const selectDishFilteredByName = (state, { dishName }) => {
  return Object.values(selectDishModule(state).entities).reduce(
    (acc, { name, id, price }) => {
      if (name.toLowerCase().includes(dishName.toLowerCase())) {
        acc.push({ name, id, price });
      }
      return acc;
    },
    []
  );
};
