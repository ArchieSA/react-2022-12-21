import { createStore } from 'redux';
import { cartReducer } from './modules/cart';
import { restaurantReducer } from './modules/restaurant';
import { dishReducer } from './modules/dish';
import { userReducer } from './modules/user';
import { reviewReducer } from './modules/review';

const rootReducer = (state = {}, action) => {
  const newState = {
    cart: cartReducer(state.cart, action),
    restaurant: restaurantReducer(state.restaurant, action),
    dish: dishReducer(state.dish, action),
    user: userReducer(state.user, action),
    review: reviewReducer(state.review, action),
  };

  console.log('newState: ', newState);

  return newState;
};

export const store = createStore(rootReducer);
