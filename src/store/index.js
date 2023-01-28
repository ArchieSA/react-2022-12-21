import { combineReducers } from 'redux';
import { restaurantSlice } from './modules/restaurant';
import { reviewSlice } from './modules/review';
import { configureStore } from '@reduxjs/toolkit';
import { dishSlice } from './modules/dish';
import { userSlice } from './modules/user';
import { cartSlice } from './modules/cart';

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
