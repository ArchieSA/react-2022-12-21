export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) => {
  return selectReviewModule(state).entities[reviewId];
};

export const selectUserIdByReviewId = (state, { reviewId }) => {
  return selectReviewById(state, { reviewId })?.userId;
};
