// just functions return obj. => each obj is in correct format that action is expected to be
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
