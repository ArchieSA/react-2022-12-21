import { failLoadingUsers, USER_ACTIONS, startLoadingUsers } from '../actions';
import { selectUserIds } from '../selectors';
import { finishLoadingUsers } from '../actions';
import { normalizer } from '../../../utils/normalizer';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOADING_STATUSES } from '../../../constants/loadingStatuses';

// export const loadUsersIfNotExist = (store) => (next) => (action) => {
//   if (action?.type !== USER_ACTIONS.load) {
//     return next(action);
//   }

//   const state = store.getState();

//   if (selectUserIds(state)?.length) {
//     return;
//   }

//   store.dispatch(startLoadingUsers());
//   fetch('http://localhost:3001/api/users/')
//     .then((response) => response.json())
//     .then((users) => {
//       console.log(users);
//       store.dispatch(finishLoadingUsers(normalizer(users)));
//     })
//     .catch(() => {
//       store.dispatch(failLoadingUsers());
//     });
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (selectUserIds(state)?.length) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch('http://localhost:3001/api/users/');
    return normalizer(await response.json());
  }
);
