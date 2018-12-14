import {
  RECEIVE_ALL_ARTISTS,
  RECEIVE_ONE_ARTIST
} from '../actions/artist_actions';
import * as _ from 'lodash';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      if (action.artists === undefined) return null;
      return action.artists;
    case RECEIVE_ONE_ARTIST:
      if (action.artist === undefined) return state;
      return _.merge({}, state, action.artist);
    default:
      return state;
  }
};

export default artistsReducer;