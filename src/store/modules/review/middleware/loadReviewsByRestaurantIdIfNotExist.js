import { normalizer } from '../../../utils/normalizer';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import { reviewActions } from '..'

import { selectReviewIds } from '../selectors';

export const loadReviewByRestaurantIdIfNotExist =
  (store) => (next) => (action) => {
    if (action?.type !== reviewActions.load.type) {
      return next(action);
    }
    
    const restaurantId = action.payload;
    const state = store.getState();
    const restaurantReviewIds = selectRestaurantReviewsById(state, {
      restaurantId,
    });
    const loadedReviewIds = selectReviewIds(state);

    if (
      restaurantReviewIds.every((restaurantReviewId) =>
        loadedReviewIds.includes(restaurantReviewId)
      )
    ) {
      return;
    }

    store.dispatch(reviewActions.startLoading());
    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
        store.dispatch(reviewActions.finishLoading(normalizer(reviews)));
      })
      .catch(() => store.dispatch(reviewActions.failLoading()));
  };
