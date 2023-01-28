import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './thunk/fetchUsers';

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'user',
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (build) =>
    build
      .addCase(fetchUsers.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        userEntityAdapter.addMany(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loadingStatus = LOADING_STATUSES.failed;
      }),
});
