import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectDishById } from '../selectors';

export const fetchDishById = createAsyncThunk(
  `dish/fetchDishById`,
  async (productId, { getState, rejectWithValue }) => {
    const state = getState();

    const existedDish = selectDishById(state, { productId });
    console.log('productId: ', productId);

    if (existedDish) rejectWithValue(LOADING_STATUSES.earlyAdded);

    const response = await fetch(
      `http://localhost:3001/api/products?productId=${productId}`
    );

    return await response.json();
  }
);
