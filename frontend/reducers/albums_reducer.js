import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ONE_ALBUM
} from '../actions/album_actions';
import * as _ from 'lodash';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      if (action.albums === undefined) return state;
      return _.merge({}, state, action.albums);
    case RECEIVE_ONE_ALBUM:
      if (action.album === undefined) return state;
      return _.merge({}, state, action.album);
    default:
      return state;
  }
};

export default albumsReducer;