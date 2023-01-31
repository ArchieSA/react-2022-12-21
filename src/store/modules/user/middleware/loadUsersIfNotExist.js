import { selectUserIds } from '../selectors';
import { normalizer } from '../../../utils/normalizer';
import { userActions } from '..';

export const loadUsersIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== userActions.load.type) {
    return next(action);
  }
  console.log('loadUsersIfNotExist action:', action?.type);
  const state = store.getState();

  if (selectUserIds(state)?.length) {
    return;
  }

  store.dispatch(userActions.startLoading());
  fetch('http://localhost:3001/api/users')
    .then((response) => response.json())
    .then((users) => {
      console.log(users);
      store.dispatch(userActions.finishLoading(normalizer(users)));
    })
    .catch(() => {
      store.dispatch(userActions.failLoading());
    });
};
