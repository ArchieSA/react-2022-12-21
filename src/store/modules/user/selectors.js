import {LOADING_STATUSES} from "../../constants/loadingStatuses";

export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

export const selectUserIds = (state) => selectUserModule(state).ids;

export const selectUsersLoadingStatus = (state) => selectUserModule(state).loadingStatus;

export const selectIsUsersLoading = (state) => selectUsersLoadingStatus(state) === LOADING_STATUSES.loading;
