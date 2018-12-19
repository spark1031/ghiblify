import {
  UPDATE_CURRENT_PLAYING_ALBUM,
  UPDATE_CURRENT_PLAYING_PLAYLIST,
  UPDATE_CURRENT_PLAYING_SONGLIST,
  TOGGLE_IS_PLAYING,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG
} from '../actions/music_player_actions';

import * as _ from 'lodash';

const _initialPlayer = Object.freeze({
  currentPlayingAlbum: null,
  currentPlayingPlaylist: null,
  trackList: [],
  currentSongIndex: 0,
  isPlaying: false
});

const musicPlayerReducer = (state = _initialPlayer, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_CURRENT_PLAYING_ALBUM:
      return {
        currentSongIndex: action.currentSongIndex,
        currentPlayingAlbum: action.album,
        currentPlayingPlaylist: null,
        trackList: action.trackList,
        isPlaying: true
      };
    case UPDATE_CURRENT_PLAYING_PLAYLIST:
      return {
        currentSongIndex: action.currentSongIndex,
        currentPlayingAlbum: null,
        currentPlayingPlaylist: action.playlist,
        trackList: action.trackList,
        isPlaying: true
      };
    case UPDATE_CURRENT_PLAYING_SONGLIST:
      return {
        currentSongIndex: action.currentSongIndex,
        currentPlayingAlbum: null,
        currentPlayingPlaylist: null,
        trackList: action.trackList,
        isPlaying: true
      };
    case TOGGLE_IS_PLAYING:
      return _.merge({}, state, {
        isPlaying: !state.isPlaying
      });
    case PLAY_NEXT_SONG:
      if (state.trackList.length === 0) return state;
      return _.merge({}, state, {
        currentSongIndex: (state.currentSongIndex + 1) % state.trackList.length
      });
    case PLAY_PREVIOUS_SONG:
      if (state.trackList.length === 0) return state;
      let currentSongIdx = state.currentSongIndex;
      if (state.currentSongIndex === 0) {
        currentSongIdx = state.trackList.length;
      }
      return _.merge({}, state, {
        currentSongIndex: (currentSongIdx - 1) % state.trackList.length
      });
    default:
      return state;
  }
};

export default musicPlayerReducer;