import { normalizedReviews } from '../../../constants/normalized-fixtures'

const defaultState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review

    return acc
  }, {}),
  ids: normalizedReviews.map(({ id }) => id)

}

export function reviewReducer(state = defaultState, action) {

  return state
} 