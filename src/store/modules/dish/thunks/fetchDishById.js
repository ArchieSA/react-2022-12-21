import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "../selectors";
import { LOADING_STATUSES } from "../../../constants/loadingStatuses";

export const fetchDishById = createAsyncThunk(
  `dish/fetchDishById`,
  async (itemId, { getState, rejectWithValue }) => {
    const state = getState();

    if (selectDishById(state, { dishId: itemId })) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch('http://localhost:3001/api/products/?productId=' + itemId);

    return await response.json();
  }
);