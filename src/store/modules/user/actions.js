export const USER_ACTIONS = {
  load: 'user/Load',
  startLoading: 'user/StartLoading',
  finishLoading: 'user/FinishLoading',
  failLoading: 'user/FailLoading',
};

export const loadUsers = () => {
  return { type: USER_ACTIONS.load };
};

export const startLoadingUsers = () => ({
  type: USER_ACTIONS.startLoading,
});
export const finishLoadingUsers = (users) => ({
  type: USER_ACTIONS.finishLoading,
  payload: users,
});
export const failLoadingUsers = () => ({
  type: USER_ACTIONS.failLoading,
});
