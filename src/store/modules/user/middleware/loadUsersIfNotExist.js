import { failLoadingUsers, USER_ACTIONS, startLoadingUsers } from '../actions';
import { selectUserIds } from '../selectors';
import { finishLoadingUsers } from '../actions';
import { normalizer } from '../../../utils/normalizer';

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
    .then((users) => {
      console.log(users);
      store.dispatch(finishLoadingUsers(normalizer(users)));
    })
    .catch(() => {
      store.dispatch(failLoadingUsers());
    });
};
