import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import {
  selectDishById,
  selectDishEntities,
  selectIsDishSuccessLoaded,
} from '../dish/selectors';
import { compareDishesByName } from '../dish/utils/compareByName';

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) =>
  selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantMenuById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantMenuByIdSortedByDishName = (
  state,
  { restaurantId, sortDirection }
) => {
  const dishIds = selectRestaurantById(state, { restaurantId })?.menu;
  const dishEntities = selectDishEntities(state);
  const isDishLoaded = selectIsDishSuccessLoaded(state);

  if (!isDishLoaded) {
    return [];
  }

  return dishIds
    .map((id) => dishEntities[id])
    .sort((a, b) => compareDishesByName(a, b, sortDirection))
    .map((dish) => dish?.id);
};

export const selectRestaurantReviewsById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantIdsFilteredByName = (state, { restaurantName }) =>
  Object.values(selectRestaurantModule(state).entities).reduce(
    (acc, { id, name }) => {
      if (name.toLowerCase().includes(restaurantName.toLowerCase())) {
        acc.push(id);
      }
      return acc;
    },
    []
  );

export const selectRestaurantEntitiesFilteredByName = (
  state,
  { restaurantName }
) =>
  Object.values(selectRestaurantModule(state).entities).filter(({ id, name }) =>
    name.toLowerCase().includes(restaurantName.toLowerCase())
  ) || [];

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).loadingStatus;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === LOADING_STATUSES.loading;
