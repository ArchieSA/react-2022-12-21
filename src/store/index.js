import { combineReducers } from 'redux';
import { cartReducer, cartSlice } from './modules/cart';
import { restaurantSlice } from './modules/restaurant';
import { loadUsersIfNotExist } from './modules/user/thunk/loadUsersIfNotExist';
import { reviewReducer, reviewSlice } from './modules/review';
import { userReducer, userSlice } from './modules/user';

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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     logger,
//     loadRestaurantsIfNotExist,
//     loadDishByRestaurantIdIfNotExist,
//     loadUsersIfNotExist,
//     loadReviewByRestaurantIdIfNotExist
//   )
// );
