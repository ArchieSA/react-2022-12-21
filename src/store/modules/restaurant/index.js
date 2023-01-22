import { normalizedRestaurants } from '../../../constants/normalized-fixtures';

const defaultState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantReducer = (state = defaultState, action) => {
  return state;
};
