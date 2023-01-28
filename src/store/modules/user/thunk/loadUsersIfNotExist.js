import { normalizer } from '../../../utils/normalizer';
import { selectUserIds } from '../selectors';
import { userActions } from '../index';

export const loadUsersIfNotExist = (dispatch, getState) => {
  const state = getState();

  if (selectUserIds(state)?.length) {
    return;
  }

  dispatch(userActions.startLoading());
  fetch('http://localhost:3001/api/users/')
    .then((response) => response.json())
    .then((users) => {
      dispatch(userActions.finishLoading(normalizer(users)));
    })
    .catch(() => {
      dispatch(userActions.failLoading());
    });
};
