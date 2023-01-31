import { combineReducers } from 'redux';
import { cartSlice } from './modules/cart';
import { restaurantSlice } from './modules/restaurant';
import { userSlice } from './modules/user';
import { reviewSlice } from './modules/review';
import { configureStore } from '@reduxjs/toolkit';
import { dishSlice } from './modules/dish';

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([
  //     logger,
  //   ]),
});
