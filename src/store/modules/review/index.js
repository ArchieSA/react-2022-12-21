import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { fetchReviewsByRestaurantId } from './thunk/fetchReviewsByRestaurantId';

export const reviewEntityAdapter = createEntityAdapter();

export const entitySelectors = reviewEntityAdapter.getSelectors();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (build) =>
    build
      .addCase(fetchReviewsByRestaurantId.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        reviewEntityAdapter.addMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchReviewsByRestaurantId.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
