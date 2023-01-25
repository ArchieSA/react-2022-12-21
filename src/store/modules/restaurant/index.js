import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { RESTAURANT_ACTIONS } from './actions';

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const restaurantReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.startLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.loading,
      };
    }
    case RESTAURANT_ACTIONS.finishLoading: {
      return {
        ...action.payload,
        loadingStatus: LOADING_STATUSES.success
      };
    }
    case RESTAURANT_ACTIONS.failLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.failed,
      };
    }
    default:
      return state;
  }
};
