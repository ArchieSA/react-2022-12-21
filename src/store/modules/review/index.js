import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { fetchReviewsByRestaurantId } from './thunk/fetchReviewsByRestaurantId';

const revewEntityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
  name: 'review',
  initialState: revewEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsByRestaurantId.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading
      })
      .addCase(fetchReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        revewEntityAdapter.addMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.idle
      })
      .addCase(fetchReviewsByRestaurantId.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      })
  }
})