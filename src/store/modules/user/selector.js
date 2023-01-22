export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) => {
  return selectUserModule(state).entities[userId];
};
