import { normalizer } from '../../../utils/normalizer';
import { failLoadingUsers, finishLoadingUsers, USER_ACTIONS } from '../actions';
import { startLoadingUsers } from '../actions';
import { selectUserIds, selectUsersByRestaurantId } from '../selectors';

export const loadUsersIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== USER_ACTIONS.load) {
    // console.log('users:', action);
    return next(action);
  }

  const state = store.getState();
  const loadedUsers = selectUserIds(state);
  const restaurantReviewsUsers = selectUsersByRestaurantId(state, {
    restaurantId: action.payload,
  });
  // console.log('loadedUsers', loadedUsers);
  // console.log('restaurantReviewsUsers', restaurantReviewsUsers);

  if (selectUserIds(state)?.length) {
    return;
  }

  if (
    restaurantReviewsUsers?.length > 0 &&
    restaurantReviewsUsers.every((userId) => loadedUsers.includes(userId))
  ) {
    return;
  }

  store.dispatch(startLoadingUsers());
  fetch(`http://localhost:3001/api/users`)
    .then((response) => response.json())
    .then((users) => {
      store.dispatch(finishLoadingUsers(normalizer(users)));
    })
    .catch(() => store.dispatch(failLoadingUsers()));
};
