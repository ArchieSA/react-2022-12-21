import { normalizedUsers } from '../../../constants/normalized-fixtures';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { USER_ACTIONS } from './actions';

// const defaultState = {
//   entities: normalizedUsers.reduce((acc, user) => {
//     acc[user.id] = user;

//     return acc;
//   }, {}),
//   ids: normalizedUsers.map(({ id }) => id),
// };

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_ACTIONS.startLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.loading,
      };
    }
    case USER_ACTIONS.finishLoading: {
      return {
        ...action.payload,
        loadingStatus: LOADING_STATUSES.success,
      };
    }
    case USER_ACTIONS.failLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.failed,
      };
    }
    default:
      return state;
  }
};

// export const userReducer = (state = defaultState, action) => {
//   return state;
// };
