export const USER_ACTIONS = {
  load: 'user/Load',
  startLoading: 'user/StartLoading',
  finishLoading: 'user/FinishLoading',
  failLoading: 'user/FailLoading',
};

export const loadUsers = () => ({ type: USER_ACTIONS.load });

export const startLoadingUsers = () => ({
  type: USER_ACTIONS.startLoading,
});
export const finishLoadingUsers = (restaurants) => ({
  type: USER_ACTIONS.finishLoading,
  payload: restaurants,
});

export const failLoadingUsers = () => ({
  type: USER_ACTIONS.failLoading,
});
