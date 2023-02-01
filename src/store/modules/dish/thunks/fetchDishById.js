import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById, selectDishIds } from "../selectors";
import { LOADING_STATUSES } from "../../../constants/loadingStatuses";

export const fetchDishById = createAsyncThunk(
  `dish/fetchDishById`,
  async (productId, { getState, rejectWithValue }) => {
    const state = getState();

    if (selectDishById(state, { dishId: productId })) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetch('http://localhost:3001/api/products/?productId=' + productId);

    return await response.json();
  }
);
