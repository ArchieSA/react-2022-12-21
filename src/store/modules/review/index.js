import { normalizedReviews } from '../../../constants/normalized-fixtures';

const defaultState = {
  entities: normalizedReviews.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewReducer = (state = defaultState, action) => {
  return state;
};
