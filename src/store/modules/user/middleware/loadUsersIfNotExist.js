
import { failLoadingUsers, USER_ACTIONS, startLoadingUsers } from '../actions';
import { finishLoadingUsers } from '../actions';
import { normalizer } from '../../../utils/normalizer';
import { selectUserIds } from '../selectors';

export const loadUsersIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== USER_ACTIONS.load) {
    return next(action);
  }

  const state = store.getState();
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