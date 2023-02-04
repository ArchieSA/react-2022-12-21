import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectDishById } from '../selectors';

export const fetchDishesIfOneNotLoaded = createAsyncThunk(
  'dish/fetchDishesIfOneNotLoaded',
  async (dishId, { getState, rejectWithValue }) => {
    const state = getState();
    const dish = selectDishById(state, { dishId });
    if (dish) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch(`http://localhost:3001/api/products`);

    return await response.json();
  }
);
