import {
  RECEIVE_ALL_ARTISTS,
  RECEIVE_ONE_ARTIST
} from '../actions/artist_actions';
import * as _ from 'lodash';

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ARTISTS:
      return action.artists;
    case RECEIVE_ONE_ARTIST:
      return _.merge({}, state, action.artist);
    default:
      return state;
  }
};

export default artistsReducer;