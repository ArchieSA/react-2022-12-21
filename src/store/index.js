import { combineReducers } from 'redux';
import { cartReducer } from './modules/cart';
import { restaurantSlice } from './modules/restaurant';
import { loadUsersIfNotExist } from './modules/user/thunk/loadUsersIfNotExist';
import { reviewSlice } from './modules/review';
import { userSlice } from './modules/user';
import { loadReviewByRestaurantIdIfNotExist } from './modules/review/thunk/loadReviewsByRestaurantIdIfNotExist';
import { configureStore } from '@reduxjs/toolkit';
import { dishSlice } from './modules/dish';

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
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
