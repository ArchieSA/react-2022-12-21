import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds, selectIsDishFullLoaded } from "../selectors";
import { LOADING_STATUSES } from "../../../constants/loadingStatuses";

export const fetchDishes = createAsyncThunk (

    'dish/fetchDishes',
    async (_, { getState, rejectWithValue }) => {
        const state = getState();

        if (selectIsDishFullLoaded(state)) return rejectWithValue(LOADING_STATUSES.earlyAdded);

        const resp = await fetch('http://localhost:3001/api/products');
        return await resp.json();

    }

)