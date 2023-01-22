export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) => {
  return selectReviewModule(state).entities[reviewId];
};

export const selectReviewIds = (state) => selectReviewModule(state).ids;
