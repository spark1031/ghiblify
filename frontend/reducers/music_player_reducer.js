import {
  UPDATE_TRACK_LIST,
  TOGGLE_IS_PLAYING,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG
} from '../actions/music_player_actions';

import * as _ from 'lodash';

const _initialPlayer = Object.freeze({
  trackList: [],
  currentSongIndex: 0,
  isPlaying: false
});

const musicPlayerReducer = (state = _initialPlayer, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_TRACK_LIST:
      return _.merge({}, state, {
        trackList: action.trackList,
        currentSongIndex: 0,
        isPlaying: true
      });
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
      // if (state.currentSongIndex === 0) {

      // }
      return _.merge({}, state, {
        currentSongIndex: (state.currentSongIndex - 1) % state.trackList.length
      });
    default:
      return state;
  }
};

export default musicPlayerReducer;