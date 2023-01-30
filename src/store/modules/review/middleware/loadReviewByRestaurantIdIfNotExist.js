import { normalizer } from "../../../utils/normalizer";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { REVIEW_ACTIONS, failLoadingReviews, finishLoadingReviews, startLoadingReviews } from "../actions";
import { selectReviewIds } from '../selectors';

export const loadReviewByRestaurantIdIfNotExist = (store) => (next) => (action) => {
    if (action?.type !== REVIEW_ACTIONS.load) {
        return next(action);
    }

    const restaurantId = action.payload;
    const state = store.getState();
    const restaurantReviewIds = selectRestaurantReviewsById(state, { restaurantId });
    const loadedReviewIds = selectReviewIds(state);
    console.log('restauranReviewsIds: ', restaurantReviewIds);
    console.log('loadedReviewsIds: ', loadedReviewIds);

    if (restaurantReviewIds.every(restaurantReviewId => loadedReviewIds.includes(restaurantReviewId))) {
        return;
    }

    store.dispatch(startLoadingReviews());
    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
        .then(response => response.json())
        .then(reviews => {
            store.dispatch(finishLoadingReviews(normalizer(reviews)))
        })
        .catch(() => store.dispatch(failLoadingReviews));
}