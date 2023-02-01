import { entitySelectors } from '.';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';

export const selectDishModule = (state) => state.dish;

export const selectDishEntities = (state) => state.dish.entities;

export const selectDishById = (state, { dishId }) =>
  entitySelectors.selectById(selectDishModule(state), dishId);

export const selectDishIds = (state) =>
  entitySelectors.selectIds(selectDishModule(state));


export const selectDishIdsFilteredByName = (state, { dishName }) =>
  Object.values(selectDishModule(state).entities).reduce(
    (acc, { id, name }) => {
      if (name.toLowerCase().includes(dishName.toLowerCase())) {
        acc.push(id);
      }
      return acc;
    },
    []
  );

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).loadingStatus;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectIsDishSuccessLoaded = (state) =>
  selectDishLoadingStatus(state) === LOADING_STATUSES.success;

export const selectIsDishFullLoaded = (state) =>
  selectDishModule(state).isFullLoaded;
