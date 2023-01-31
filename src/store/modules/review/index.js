import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { fetchReviewByRestaurantId } from './thunks/fetchReviewByRestaurantId';

export const reviewEntityAdapter = createEntityAdapter();

export const entitySelectors = reviewEntityAdapter.getSelectors();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (build) =>
    build
      .addCase(fetchReviewByRestaurantId.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchReviewByRestaurantId.fulfilled, (state, { payload }) => {
        reviewEntityAdapter.addMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchReviewByRestaurantId.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});


/*
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { REVIEW_ACTIONS } from './actions';

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle,
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
*/