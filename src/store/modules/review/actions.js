export const REVIEWS_ACTIONS = {
    load: 'reviews/load',
    startLoading: 'reviews/startLoading',
    finishLoading: 'reviews/finishLoading',
    failLoading: 'reviews/failLoading',
}

export const loadReviews = (restaurantId) => ({ type: REVIEWS_ACTIONS.load, payload: restaurantId })

export const startLoadingReviews = () => ({
    type: REVIEWS_ACTIONS.startLoading,
})

export const finishLoadingReviews = (reviews) => ({
    type: REVIEWS_ACTIONS.finishLoading,
    payload: reviews,
})

export const failLoadingReviews = () => ({
    type: REVIEWS_ACTIONS.startLoading,
})