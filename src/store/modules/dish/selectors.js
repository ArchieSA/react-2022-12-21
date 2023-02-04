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

export const selectDishesFilteredByName = (state, { dishName }) =>
  Object.values(selectDishEntities(state)).reduce((acc, { id, name }) => {
    if (name.toLowerCase().includes(dishName.toLowerCase())) {
      acc.push({ id, name });
    }
    return acc;
  }, []);
