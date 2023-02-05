import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectRestaurantIds } from '../selectors';

export const fetchRestaurants = createAsyncThunk(
  `restaurants/fetchRestaurants`,
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    if (selectRestaurantIds(state)?.length) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch('http://localhost:3001/api/restaurants');

    return await response.json();
  }
);
