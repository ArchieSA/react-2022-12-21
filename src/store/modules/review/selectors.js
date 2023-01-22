export const selectReviewModule = (state) => state.review;

export const selectReviewById = (reviewId) => (state) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewUserById = (state, { reviewId }) =>
  selectReviewById(state, { reviewId })?.userId;

export const selectReviewIds = (state) => selectReviewModule(state).ids;
