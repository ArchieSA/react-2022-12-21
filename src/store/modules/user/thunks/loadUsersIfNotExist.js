import { selectUserIds } from '../selectors';
import { normalizer } from '../../../utils/normalizer';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { LOADING_STATUSES } from '../../../constants/loadingStatuses';

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