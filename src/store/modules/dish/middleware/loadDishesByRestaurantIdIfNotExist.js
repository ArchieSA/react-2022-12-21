import { normalizer } from '../../../utils/normalizer';
import { selectRestaurantMenuById } from '../../restaurant/selectors';
import {
  failLoadingDishes,
  finishLoadingDishes,
  startLoadingDishes,
  DISH_ACTIONS,
} from '../actions';
import { selectDishIds } from '../selectors';

export const loadDishesByRestaurantIdIfNotExist =
  (store) => (next) => (action) => {
    if (action?.type !== DISH_ACTIONS.load) {
      return next(action);
    }

    const restaurantId = action.payload;
    const state = store.getState();
    const restaurantDishIds = selectRestaurantMenuById(state, { restaurantId });
    const loadedDishIds = selectDishIds(state);

    if (
      restaurantDishIds.every((restaurantDishId) =>
        loadedDishIds.includes(restaurantDishId)
      )
    ) {
      return;
    }

    store.dispatch(startLoadingDishes());
    fetch(`http://localhost:3001/api/products?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((dishes) => {
        store.dispatch(finishLoadingDishes(normalizer(dishes)));
      })
      .catch(() => store.dispatch(failLoadingDishes));
  };
