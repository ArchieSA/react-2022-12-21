import { failLoadingUsers, USER_ACTIONS, startLoadingUsers } from '../actions';
import { finishLoadingUsers } from '../actions';
import { normalizer } from '../../../utils/normalizer';
import { selectUserById, selectUserIds } from '../selectors';

export const loadUsersIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== USER_ACTIONS.load) {
    return next(action);
  }

  // const userId = action.payload;
  // console.log('userId ', userId);
  const state = store.getState();
  // const user = selectUserById(state, { userId });
  // console.log('usersuer: ', user);
  // console.log('state', state);
  if (selectUserIds(state)?.length) {
    return;
  }

  store.dispatch(startLoadingUsers());
  fetch('http://localhost:3001/api/users/')
    .then((response) => response.json())
    .then((restaurants) => {
      store.dispatch(finishLoadingUsers(normalizer(restaurants)));
    })
    .catch(() => {
      store.dispatch(failLoadingUsers());
    });
};
