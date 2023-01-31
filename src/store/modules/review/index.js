import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchReviewByRestaurantId } from './thunk/fetchReviewByRestaurantId';
import { dishEntityAdapter } from '../dish';

export const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchReviewByRestaurantId.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchReviewByRestaurantId.fulfilled, (state, { payload }) => {
        dishEntityAdapter.addMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchReviewByRestaurantId.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
