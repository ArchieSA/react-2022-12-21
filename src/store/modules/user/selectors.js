import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { selectRestaurantReviewsById } from '../restaurant/selectors';
import { selectReviewById } from '../review/selectors';

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUserLoadingStatus = (state) =>
  selectUserModule(state).loadingStatus;

export const selectIsUserLoading = (state) =>
  selectUserLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectUsersByRestaurantId = (state, { restaurantId }) =>
  selectRestaurantReviewsById(state, { restaurantId }).map(
    (reviewId) => selectReviewById(state, { reviewId })?.userId
  );
