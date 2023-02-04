import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectDishIds } from '../selectors';

export const fetchDishes = createAsyncThunk(
  'dish/fetchDishes',
  async (_, { getState, rejectWithValue }) => {
    console.log('fetchDishes');
    const state = getState();

    if (selectDishIds(state)?.length) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch(`http://localhost:3001/api/products`);

    return await response.json();
  }
);
