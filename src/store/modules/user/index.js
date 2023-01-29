import { USER_ACTIONS } from './actions';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle
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
        loadingStatus: LOADING_STATUSES.success
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
