import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { createSlice } from '@reduxjs/toolkit';
import { dishSlice } from '../dish';

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.loading;
    },
    finishLoading: (state, { payload: { entities, ids } }) => {
      state.entities = {
        ...state.entities,
        ...entities,
      };
      state.ids = Array.from(new Set([...state.ids, ...ids]));
      state.loadingStatus = LOADING_STATUSES.success;
    },
    failLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.failed;
    },
  },
});

export const reviewActions = reviewSlice.actions;
