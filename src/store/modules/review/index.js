import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { REVIEW_ACTIONS } from './actions';

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle
};


export const reviewReducer = (state = defaultState, action) => {
  switch (action?.type) {
    case REVIEW_ACTIONS.startLoading:
      return {
        ...state,
        loadingStatus: LOADING_STATUSES.loading,
      };
    case REVIEW_ACTIONS.finishLoading:
      return {
        loadingStatus: LOADING_STATUSES.success,
        entities: {
          ...state.entities,
          ...action.payload.entities,
        },
        ids: Array.from(new Set([...state.ids, ...action.payload.ids])),
      };
    case REVIEW_ACTIONS.failLoading:
      return {
        ...state,
        loadingStatus: LOADING_STATUSES.failed,
      };
    default:
      return state;
  }
};
