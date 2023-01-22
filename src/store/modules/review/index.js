import { normalizedReviews } from '../../../constants/normalized-fixtures';

const defaultState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
  ids: normalizedReviews.map((review) => review.id),
};

export const reviewReducer = (state = defaultState, action) => {
  return state;
};
