import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './thunk/fetchUsers';
import { userEntityadapter } from './adapter';

export const userSlice = createSlice({
  name: 'user',
  initialState: userEntityadapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle
  }),
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        userEntityadapter.addMany(state, payload)
        state.loadingStatus = LOADING_STATUSES.success
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      })
  }
})
