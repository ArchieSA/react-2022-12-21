import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishIds } from '../selectors';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';

export const fetchDishes = createAsyncThunk(
  `dish/fetchDishes`,
  async (_, { getState, rejectWithValue }) => {
    console.log('fetchRestaurants');
    const state = getState();

    /*    if (selectDishIds(state)?.length) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }*/

    const response = await fetch('http://localhost:3001/api/products');

    return await response.json();
  }
);
