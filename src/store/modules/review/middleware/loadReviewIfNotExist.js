import {
  failLoadingReviews,
  finishLoadingReviews,
  REVIEW_ACTIONS,
  startLoadingReviews,
} from '../actions';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import { selectReviewIds } from '../selectors';
import { normalizer } from '../../../utils/normalizer';

export const loadReviewIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== REVIEW_ACTIONS.load) {
    console.log('action:', action);
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

  store.dispatch(startLoadingReviews());
  fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((review) => {
      console.log(review);
      store.dispatch(finishLoadingReviews(normalizer(review)));
    })
    .catch(() => {
      store.dispatch(failLoadingReviews());
    });
};
