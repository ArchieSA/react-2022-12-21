import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectRestaurantIds } from '../selectors';

export const fetchRestaurantsIfNotLoaded = createAsyncThunk(
  `restaurants/fetchRestaurantsIfNotLoaded`,
  async (restaurants, { getState, rejectWithValue }) => {
    console.log('fetchRestaurantsIfNotLoaded');
    const state = getState();
    console.log(restaurants);
    if (
      restaurants?.length > 0 &&
      restaurants.every(({ id }) => selectRestaurantIds(state).includes(id))
    ) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch('http://localhost:3001/api/restaurants/');

    return await response.json();
  }
);
