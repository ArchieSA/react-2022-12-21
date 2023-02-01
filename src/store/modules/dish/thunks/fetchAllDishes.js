import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllDishes = createAsyncThunk(
  `dish/fetchAllDishes`,
  async () => {
    const response = await fetch(`http://localhost:3001/api/products`);

    return await response.json();
  }
);
