import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { REVIEW_ACTIONS } from './actions';
import { fetchReviews } from './thunk/fetchReviews';

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState(
    {
      loadingStatus: LOADING_STATUSES.idle
  }),
  extraReducers: (builder) => 
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading
      })
      .addCase(fetchReviews.fulfilled, (state, {payload}) => {
        reviewEntityAdapter.addMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success
      })
      .addCase(fetchReviews.rejected, (state, {payload}) => {
        state.loadingStatus = 
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed
      })
})
