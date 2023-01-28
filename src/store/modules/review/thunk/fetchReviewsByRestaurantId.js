import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';

export const fetchReviewsByRestaurantId = createAsyncThunk(
  'reviews/fetchReviewsByRestaurantId',
  async (restaurantId, { getState, rejectWithValue }) => {
    const state = getState();
    const restaurantReviewIds = selectRestaurantReviewsById(state, {
      restaurantId,
    });
    const loadedReviewIds = selectReviewIds(state);

    if (
      restaurantReviewIds.every((restaurantDishId) =>
        loadedReviewIds.includes(restaurantDishId)
      )
    ) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return await response.json();
  }
);