import { normalizedUsers } from '../../../constants/normalized-fixtures'

const defaultState = {
  entities: normalizedUsers.reduce((acc, review) => {
    acc[review.id] = review

    return acc
  }, {}),
  ids: normalizedUsers.map(({ id }) => id)

}

export function userReducer(state = defaultState, action) {

  return state
} 