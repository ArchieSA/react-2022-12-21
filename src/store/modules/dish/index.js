import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { fetchAllDishes } from './thunks/fetchAllDishes';
import { fetchDishById } from './thunks/fetchDIshById';
import { fetchDishByRestaurantId } from './thunks/fetchDishByRestaurantId';

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
      })
      .addCase(fetchAllDishes.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchAllDishes.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchAllDishes.rejected, (state) => {
        state.loadingStatus = LOADING_STATUSES.failed;
      })
      .addCase(fetchDishById.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchDishById.fulfilled, (state, { payload }) => {
        dishEntityAdapter.upsertOne(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchDishById.rejected, (state) => {
        state.loadingStatus = LOADING_STATUSES.failed;
      }),
});
