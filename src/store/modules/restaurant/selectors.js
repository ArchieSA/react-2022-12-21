import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import {
  selectDishEntities,
  selectIsDishSuccessLoaded,
} from '../dish/selectors';
import { compareDishesByName } from '../dish/utils/compareByName';
import { createSelector } from 'reselect';
import { selectReviewEntities } from '../review/selectors';

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

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).loadingStatus;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatus(state) === LOADING_STATUSES.loading;

// export const selectRestaurantRating = (state, { restaurantId }) => {
//   const restaurantReviewIds = selectRestaurantReviewsById(state, {
//     restaurantId,
//   });
//   const reviewEntities = selectReviewEntities(state);

//   if (!Object.keys(reviewEntities)?.length) {
//     return 0;
//   }

//   return Math.round(
//     restaurantReviewIds.reduce(
//       (sum, reviewId) => sum + reviewEntities[reviewId]?.rating || 0,
//       0
//     ) / restaurantReviewIds.length
//   );
// };

export const createSelectRestaurantRating = () =>
  createSelector(
    [selectRestaurantReviewsById, selectReviewEntities],
    (restaurantReviewIds, reviewEntities) => {
      if (!Object.keys(reviewEntities)?.length) {
        return 0;
      }

      return Math.round(
        restaurantReviewIds.reduce(
          (sum, reviewId) => sum + reviewEntities[reviewId]?.rating || 0,
          0
        ) / restaurantReviewIds.length
      );
    }
  );

export const selectRestaurantEntitiesValuesAsArray = (state) => {
  return Object.values(selectRestaurantModule(state).entities);
};

export const restaurantListContainsCurrentDish = (state, { dishId }) => {
  return selectRestaurantEntitiesValuesAsArray(state).filter((item) =>
    item.menu.includes(dishId)
  );
};
