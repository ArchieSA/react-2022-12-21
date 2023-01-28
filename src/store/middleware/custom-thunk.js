export const customThunk = (store) => (next) => (action) => {
  if (typeof action !== 'function') {
    return next(action);
  }

  action(store.dispatch.bind(store), store.getState.bind(store));
};
