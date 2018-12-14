import {
  RECEIVE_ALL_SONGS,
  RECEIVE_ONE_SONG
} from '../actions/song_actions';

import * as _ from 'lodash';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      //do I need to return an array of song objects? currently returning an object of song objects..
      return action.songs;
    case RECEIVE_ONE_SONG:
      return _.merge({}, state, action.song);
    default:
      return state;
  }
};

export default songsReducer;