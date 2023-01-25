import { normalizedUsers } from '../../../constants/normalized-fixtures';

const defaultState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
  ids: normalizedUsers.map((id) => id),


export const userReducer = (state = defaultState, action) => {
  return state;
};
