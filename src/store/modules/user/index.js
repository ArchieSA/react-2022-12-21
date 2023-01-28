import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.loading;
    },
    finishLoading: (state, { payload: { entities, ids } }) => {
      state.entities = entities;
      state.ids = ids;
      state.loadingStatus = LOADING_STATUSES.success;
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.failed;
    },
  },
});

export const userActions = userSlice.actions;
