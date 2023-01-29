import { USER_ACTIONS } from './actions';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './thunk/fetchUsers';

const defaultState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.idle
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_ACTIONS.startLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.loading,
      };
    }
    case USER_ACTIONS.finishLoading: {
      return {
        ...action.payload,
        loadingStatus: LOADING_STATUSES.success
      };
    }
    case USER_ACTIONS.failLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.failed,
      };
    }
    default:
      return state;
  }
};

const userEntityAdapter = createEntityAdapter()

export const userSlice = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle
  }),

  extraReducers: (builder) => 
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading
      })
      .addCase(fetchUsers.fulfilled, (state, {payload}) => {
        userEntityAdapter.addMany(state, payload)
        state.loadingStatus = LOADING_STATUSES.success
      })
      .addCase(fetchUsers.rejected, (state, {payload}) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
          ? LOADING_STATUSES.success
          : LOADING_STATUSES.failed
      })

})
