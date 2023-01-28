import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchReviewsByRestaurantId } from './thunk/fetchReviewsByRestaurantId';
import { dishEntityAdapter } from '../dish';

export const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'review',
  initialState: reviewEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchReviewsByRestaurantId.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        dishEntityAdapter.addMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchReviewsByRestaurantId.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
