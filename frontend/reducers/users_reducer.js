import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import {
  RECEIVE_ALL_USERS,
  RECEIVE_ONE_USER
} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_ONE_USER:
      return merge({}, state, action.user);
    default:
      return state;
  }
};

export default usersReducer;