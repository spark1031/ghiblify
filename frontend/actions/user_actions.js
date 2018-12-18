export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_ONE_USER = 'RECEIVE_ONE_USER';

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveOneUser = (user) => ({
  type: RECEIVE_ONE_USER,
  user
});