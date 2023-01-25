export const selectUserModule = (state) => state.user;

export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

export const selectUserIds = (state) => selectUserModule(state).ids;
