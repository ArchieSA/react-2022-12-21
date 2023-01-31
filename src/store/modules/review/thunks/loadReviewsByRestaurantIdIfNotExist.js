import { normalizer } from '../../../utils/normalizer';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import { reviewActions } from '..'

import { selectReviewIds } from '../selectors';

export const loadReviewsByRestaurantIdIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    const state = getState();
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

    dispatch(reviewActions.startLoading());
    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
        dispatch(reviewActions.finishLoading(normalizer(reviews)));
      })
      .catch(() => dispatch(reviewActions.failLoading()));
  };
