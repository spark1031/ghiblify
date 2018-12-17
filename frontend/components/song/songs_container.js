import {
  connect
} from 'react-redux';
import SongList from './song_list';
import {
  addSongToPlaylist,
  removeSongFromPlaylist
} from '../../actions/playlist_song_actions';
import {
  fetchAllSongs
} from '../../actions/song_actions';
import {
  openModal
} from '../../actions/modal_actions';
import * as _ from 'lodash';
import loader from '../hocs/loader';


const mapStateToProps = (state) => {
  const songs = state.entities.songs;
  if (_.isEmpty(songs)) {
    return {
      initialWrappedProps: undefined
    };
  }
  return {
    initialWrappedProps: {
      songsArr: Object.values(songs)
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    removeSongFromPlaylist: (playlistSongId) => dispatch(removeSongFromPlaylist(playlistSongId)),
    openModal: (modal, modalInfo) => dispatch(openModal(modal, modalInfo)),
    wrappedPropsLoader: () => dispatch(fetchAllSongs())
    // playSongs:
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(loader(SongList));

// import {
//   connect
// } from 'react-redux';
// import SongList from './song_list';
// import {
//   addSongToPlaylist,
//   removeSongFromPlaylist
// } from '../../actions/playlist_song_actions';
// import {
//   fetchAllSongs
// } from '../../actions/song_actions';
// import {
//   openModal
// } from '../../actions/modal_actions';
// import * as _ from 'lodash';
// import loader from '../hocs/loader';


// const mapStateToProps = (state) => {
//   const songs = state.entities.songs;
//   if (_.isEmpty(songs)) {
//     return {
//       initialWrappedProps: undefined
//     };
//   }
//   return {
//     initialWrappedProps: {
//       songsArr: Object.values(songs)
//     }
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
//     removeSongFromPlaylist: (playlistSongId) => dispatch(removeSongFromPlaylist(playlistSongId)),
//     openModal: (modal, modalInfo) => dispatch(openModal(modal, modalInfo)),
//     wrappedPropsLoader: () => dispatch(fetchAllSongs())
//     // playSongs:
//   };
// };

// const mergeProps = (connectedProps, connectedDispatch) => {
//   const {
//     wrappedPropsLoader,
//     ...restConnectedDispatch
//   } = connectedDispatch;
//   return {
//     initialWrappedProps: {
//       ...connectedProps,
//       ...restConnectedDispatch
//     },
//     wrappedPropsLoader
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(SongList));