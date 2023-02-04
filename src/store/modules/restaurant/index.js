import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { fetchRestaurants } from './thunk/fetchRestaurants';
import { fetchRestaurantsIfNotLoaded } from './thunk/fetchRestaurantsIfNotLoaded';

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: restaurantEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchRestaurants.fulfilled, (state, { payload }) => {
        restaurantEntityAdapter.setAll(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchRestaurants.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      })
      .addCase(fetchRestaurantsIfNotLoaded.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchRestaurantsIfNotLoaded.fulfilled, (state, { payload }) => {
        restaurantEntityAdapter.setAll(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchRestaurantsIfNotLoaded.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
