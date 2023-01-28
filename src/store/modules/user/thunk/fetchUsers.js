import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectUserIds } from '../selectors';

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (selectUserIds(state)?.length) {
      rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch('http://localhost:3001/api/users/');
    return await response.json();
  }
);
