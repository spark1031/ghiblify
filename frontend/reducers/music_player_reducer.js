// import {
//   UPDATE_TRACK_LIST,
//   TOGGLE_IS_PLAYING,
//   PLAY_NEXT_SONG,
//   PLAY_PREVIOUS_SONG
// } from '../actions/music_player_actions';

// import * as _ from 'lodash';

// const musicPlayerReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case UPDATE_TRACK_LIST:
//       return _.merge({}, state, {
//         trackList: action.trackList
//       });
//     case TOGGLE_IS_PLAYING:
//     case PLAY_NEXT_SONG:
//     case PLAY_PREVIOUS_SONG:
//     default:
//       return state;
//   }
// };

// export default musicPlayerReducer;