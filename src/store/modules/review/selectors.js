import { LOADING_STATUSES } from "../../constants/loadingStatuses";

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewLoadingStatus =
  (state) => selectReviewModule(state).loadingStatus;

export const selectIsReviewLoading =
  (state) => selectReviewLoadingStatus(state) === LOADING_STATUSES.loading;
