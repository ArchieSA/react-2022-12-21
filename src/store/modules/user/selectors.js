export const selectUserModule = (state) => state.user;

export const selectUserById = (userId) => (state) =>
  selectUserModule(state).entities[userId];

export const selectUserIds = (state) => selectUserModule(state).ids;
