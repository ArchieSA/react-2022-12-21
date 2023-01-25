export const logger = (store) => (next) => (action) => {
  next(action);
};
