export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) =>
    selectReviewModule(state).entities[reviewId];
