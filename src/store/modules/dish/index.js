import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { fetchDishByRestaurantId } from './thunks/fetchDishByRestaurantId';
import { fetchDishes } from './thunks/fetchDishes';

export const dishEntityAdapter = createEntityAdapter();

export const entitySelectors = dishEntityAdapter.getSelectors();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: dishEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (build) =>
    build
      .addCase(fetchDishByRestaurantId.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchDishByRestaurantId.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchDishByRestaurantId.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }).addCase(fetchDishes.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      }).addCase(fetchDishes.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      ,
});
