import {
  failLoadingReviews,
  finishLoadingReviews,
  REVIEW_ACTIONS,
  startLoadingReviews,
} from '../actions';
import { selectReviewIds } from '../selectors';
import { normalizer } from '../../../utils/normalizer';

export const loadReviewsIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== REVIEW_ACTIONS.load) {
    // console.log('action:', action);
    return next(action);
  }

  const state = store.getState();

  if (selectReviewIds(state)?.length) {
    return;
  }

  store.dispatch(startLoadingReviews());
  fetch('http://localhost:3001/api/reviews/')
    .then((response) => response.json())
    .then((reviews) => {
      console.log(reviews);
      store.dispatch(finishLoadingReviews(normalizer(reviews)));
    })
    .catch(() => {
      store.dispatch(failLoadingReviews());
    });
};
