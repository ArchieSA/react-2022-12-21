import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { REVIEWS_ACTIONS } from './actions';

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle
};

export const reviewReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case REVIEWS_ACTIONS.startLoading:
      return {
        ...state, 
        loadingStatus: LOADING_STATUSES.loading,
      };
    case REVIEWS_ACTIONS.finishLoading:
      return {
        loadingStatus: LOADING_STATUSES.success,
        entities: {
          ...state.entities,
          ...action.payload.entities,
        },
        ids: Array.from(new Set([...state.ids, ...action.payload.ids]))
      };
    case REVIEWS_ACTIONS.failLoading:
      return {
        ...state, 
        loadingStatus: LOADING_STATUSES.failed,
      };
    default:
      return state;
  }
  
};
