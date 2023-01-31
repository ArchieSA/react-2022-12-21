import { combineReducers } from 'redux';
import { cartSlice } from './modules/cart';
import { restaurantSlice } from './modules/restaurant';
import { loadUsersIfNotExist } from './modules/user/middleware/loadUsersIfNotExist';
import { reviewSlice } from './modules/review';
import { userSlice } from './modules/user';
import { loadReviewByRestaurantIdIfNotExist } from './modules/review/middleware/loadReviewsByRestaurantIdIfNotExist';
import { configureStore } from '@reduxjs/toolkit';
import { dishSlice } from './modules/dish';
//import { logger } from './middleware/logger'

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      //logger,
      loadUsersIfNotExist,
      loadReviewByRestaurantIdIfNotExist,
    ]),
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
