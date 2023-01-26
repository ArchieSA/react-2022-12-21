// import { normalizedReviews } from '../../../constants/normalized-fixtures';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { REVIEW_ACTIONS } from './actions';

// const defaultState = {
//   entities: normalizedReviews.reduce((acc, review) => {
//     acc[review.id] = review;

//     return acc;
//   }, {}),
//   ids: normalizedReviews.map(({ id }) => id),
// };

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const reviewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REVIEW_ACTIONS.startLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.loading,
      };
    }
    case REVIEW_ACTIONS.finishLoading: {
      return {
        ...action.payload,
        loadingStatus: LOADING_STATUSES.success,
      };
    }
    case REVIEW_ACTIONS.failLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.failed,
      };
    }
    default:
      return state;
  }
};
