import {
  failLoadingRestaurants,
  RESTAURANT_ACTIONS,
  startLoadingRestaurants,
} from '../actions';
import { selectRestaurantIds } from '../selectors';
import { finishLoadingRestaurants } from '../actions';
import { normalizer } from '../../../utils/normalizer';

export const loadRestaurantsIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== RESTAURANT_ACTIONS.load) {
    return next(action);
  }

  const state = store.getState();

  if (selectRestaurantIds(state)?.length) {
    return;
  }

  store.dispatch(startLoadingRestaurants());
  fetch('http://localhost:3001/api/restaurants/')
    .then((response) => response.json())
    .then((restaurants) => {
      store.dispatch(finishLoadingRestaurants(normalizer(restaurants)));
    })
    .catch(() => {
      store.dispatch(failLoadingRestaurants());
    });
};
