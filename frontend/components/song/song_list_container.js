import {
  connect
} from 'react-redux';
import SongList from './song_list';
import {
  addSongToPlaylist,
  removeSongFromPlaylist
} from '../../actions/playlist_song_actions';
import {
  openModal
} from '../../actions/modal_actions';

import {
  updateCurrentPlayingPlaylist,
  updateCurrentPlayingAlbum,
  updateCurrentPlayingSongList,
  toggleIsPlaying
} from '../../actions/music_player_actions';


const mapStateToProps = (state, ownProps) => {
  const musicPlayer = state.ui.musicPlayer;
  const collectionType = ownProps.type;
  const collectionObject = ownProps.typeObject;



  let collectionPlaying = false;
  if (musicPlayer.isPlaying && (collectionType === "playlist") && musicPlayer.currentPlayingPlaylist && (musicPlayer.currentPlayingPlaylist.id === collectionObject.id)) {
    collectionPlaying = true;
  } else if (musicPlayer.isPlaying && (collectionType === "album") && musicPlayer.currentPlayingAlbum && (musicPlayer.currentPlayingAlbum.id === collectionObject.id)) {
    collectionPlaying = true;
  } else if (musicPlayer.isPlaying && (!musicPlayer.currentPlayingAlbum && !musicPlayer.currentPlayingPlaylist)) {
    collectionPlaying = true;
  }

  return {
    songsArr: ownProps.songsArr,
    typeObject: collectionObject, //playlist or album object, non-hydrated, for SongListItem
    type: collectionType,
    currentUserId: ownProps.currentUserId,
    currentSongIndex: musicPlayer.currentSongIndex,
    isPlaying: collectionPlaying, //is this collection the one that's playing?
    // playlistSongs: state.entities.playlistSongs
    musicPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    removeSongFromPlaylist: (playlistSongId) => dispatch(removeSongFromPlaylist(playlistSongId)),
    openModal: (modal, modalInfo) => dispatch(openModal(modal, modalInfo)),
    playSong: (song, index, type, typeObject, songsArr) => {
      if (type === "playlist") {
        dispatch(updateCurrentPlayingPlaylist(songsArr, typeObject, index));
      } else if (type === "album") {
        dispatch(updateCurrentPlayingAlbum(songsArr, typeObject, index));
      } else {
        dispatch(updateCurrentPlayingSongList(songsArr, index));
      }
    },
    toggleSongPlay: () => dispatch(toggleIsPlaying())
    // playSongs:
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  const {
    songsArr,
    currentUserId,
    currentSongIndex,
    //rest of these were needed for logic below
    isPlaying,
    musicPlayer,
    type,
    typeObject
  } = connectedState;

  const {
    removeSongFromPlaylist,
    openModal,
    //rest of these were needed for logic below
    playSong,
    toggleSongPlay
  } = connectedDispatch;


  let isCurrentContext = false;
  if (type === "playlist" && musicPlayer.currentPlayingPlaylist && musicPlayer.currentPlayingPlaylist.id === typeObject.id) {
    isCurrentContext = true;
  } else if (type === "album" && musicPlayer.currentPlayingAlbum && musicPlayer.currentPlayingAlbum.id === typeObject.id) {
    isCurrentContext = true;
  } else if (musicPlayer.isPlaying && (!musicPlayer.currentPlayingAlbum && !musicPlayer.currentPlayingPlaylist)) {
    isCurrentContext = true;
  }

  const togglePlaying = (song, index, type, typeObject, songsArr) => {
    if (isCurrentContext && musicPlayer.currentSongIndex === index) {
      toggleSongPlay();
    } else {
      playSong(song, index, type, typeObject, songsArr);
    }
  };

  return {
    songsArr,
    typeObject,
    type,
    currentUserId,
    currentSongIndex,
    isPlaying,
    removeSongFromPlaylist,
    openModal,
    togglePlaying
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SongList);


// we 're not the currently playing thing

// OR we are the currently playing thing => then we want to toggle pause and play based on
// if we are playing