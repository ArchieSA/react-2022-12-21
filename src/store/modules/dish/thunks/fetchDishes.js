import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDishes = createAsyncThunk(`dish/fetchDishes`, async () => {
  const response = await fetch(`http://localhost:3001/api/products`);

  return await response.json();
});
