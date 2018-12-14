import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_ONE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';
import * as _ from 'lodash';

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      if (action.playlists === undefined) return null;
      return action.playlists;
    case RECEIVE_ONE_PLAYLIST:
      if (action.playlist === undefined) return state;
      return _.merge({}, state, action.playlist);
    case REMOVE_PLAYLIST:
      let nextState = _.merge({}, state);
      delete nextState[action.playlistId];
      return nextState;
    default:
      return state;
  }
};


export default playlistsReducer;