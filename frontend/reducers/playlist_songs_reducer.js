import {
  RECEIVE_PLAYLIST_SONG,
  RECEIVE_ALL_PLAYLIST_SONGS,
  REMOVE_PLAYLIST_SONG
} from '../actions/playlist_song_actions';

import * as _ from 'lodash';

const playlistSongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYLIST_SONGS:
      return _.merge({}, state, action.playlistSongs);
    case RECEIVE_PLAYLIST_SONG:
      return _.merge({}, state, action.playlistSong);
    case REMOVE_PLAYLIST_SONG:
      let nextState = _.merge({}, state);
      delete nextState[action.playlistSongId];
      return nextState;
    default:
      return state;
  }
};

export default playlistSongsReducer;