import { normalizer } from '../../../utils/normalizer';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import {
  finishLoadingReviews,
  REVIEW_ACTIONS,
  startLoadingReviews,
  failLoadingReviews,
} from '../actions';
import { selectReviewIds } from '../selectors';

export const loadReviewsByRestaurantIfNotExist =
  (store) => (next) => (action) => {
    if (action?.type !== REVIEW_ACTIONS.load) {
      return next(action);
    }

    const restaurantId = action.payload;
    const state = store.getState();
    const restaurantReviewsIds = selectRestaurantReviewsById(state, {
      restaurantId,
    });
    const loadedReviewsIds = selectReviewIds(state);

    if (
      restaurantReviewsIds.every((restaurantReviewsId) =>
        loadedReviewsIds.includes(restaurantReviewsId)
      )
    ) {
      return;
    }

    store.dispatch(startLoadingReviews());
    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
        store.dispatch(finishLoadingReviews(normalizer(reviews)));
      })
      .catch(() => {
        store.dispatch(failLoadingReviews());
      });
  };
