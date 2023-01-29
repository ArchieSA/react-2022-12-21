import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constants/loadingStatuses";
import { selectReviewIds } from "../selectors";

export const fetchReviews = createAsyncThunk(
    "reviews/fetchReviews",
    async (_ , {getState, regectWithValue}) => {
        const state = getState();

        if (selectReviewIds(state)?.length) {
            return regectWithValue(LOADING_STATUSES.earlyAdded)
        }

        const responce = await fetch("http://localhost:3001/api/reviews")

        return await responce.json()
    }
)