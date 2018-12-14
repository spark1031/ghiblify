import {
  RECEIVE_ALL_SONGS,
  RECEIVE_ONE_SONG
} from '../actions/song_actions';

import * as _ from 'lodash';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      if (action.songs === undefined) return null;
      return action.songs;
    case RECEIVE_ONE_SONG:
      if (action.song === undefined) return state;
      return _.merge({}, state, action.song);
    default:
      return state;
  }
};

export default songsReducer;