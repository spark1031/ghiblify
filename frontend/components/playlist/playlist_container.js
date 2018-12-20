import {
  connect
} from 'react-redux';
import Collection from '../collection/collection';
import loader from '../hocs/loader';
import {
  fetchAllPlaylists
} from '../../actions/playlist_actions.js';
import {
  hydratedPlaylistsSelector
} from '../../reducers/selectors';

import {
  updateCurrentPlayingPlaylist,
  toggleIsPlaying
} from '../../actions/music_player_actions';


const mapStateToProps = (state, ownProps) => {
  const musicPlayer = state.ui.musicPlayer;
  let playlists = hydratedPlaylistsSelector(state.entities) || [];
  if (ownProps.playlists) {
    playlists = ownProps.playlists;
  }
  return {
    playlists,
    currentSong: musicPlayer.trackList[musicPlayer.currentSongIndex],
    currentPlayingPlaylist: musicPlayer.currentPlayingPlaylist,
    isPlaying: musicPlayer.isPlaying
  };
};


const mapDispatchToProps = dispatch => {
  return {
    wrappedPropsLoader: () => dispatch(fetchAllPlaylists()),
    updateCurrentPlayingPlaylist: (trackList, playList) => dispatch(updateCurrentPlayingPlaylist(trackList, playList)),
    toggleIsPlaying: () => dispatch(toggleIsPlaying())
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  const updateCurrentPlayingPlaylist = (trackList, playList) => {
    if (connectedState.currentPlayingPlaylist && (connectedState.currentPlayingPlaylist.id === playList.id)) {
      connectedDispatch.toggleIsPlaying();
    } else {
      connectedDispatch.updateCurrentPlayingPlaylist(trackList, playList);
    }
  };
  return {
    initialWrappedProps: {
      collectionItemInfos: connectedState.playlists.map(playlist => convertPlaylistToCollectionItemInfo(playlist, connectedState.currentPlayingPlaylist, updateCurrentPlayingPlaylist, connectedState.isPlaying)),
    },
    wrappedPropsLoader: () => connectedDispatch.wrappedPropsLoader()
  };
};

const convertPlaylistToCollectionItemInfo = (playlist, currentPlayingPlaylist, updateCurrentPlayingPlaylist, isPlaying) => {
  const selfIsPlaying = currentPlayingPlaylist && isPlaying ? +playlist.id === +currentPlayingPlaylist.id : false;
  let coverUrl;
  playlist.coverUrl ? coverUrl = playlist.coverUrl : coverUrl = "https://s3.amazonaws.com/ghiblify-resources/Other/pink_playlist_default.jpg";
  return {
    imageUrl: coverUrl,
    title: playlist.name,
    subTitle: playlist.creator.username,
    primaryTo: `/playlists/${playlist.id}`,
    secondaryTo: '/search',
    tracks: playlist.playlistSongs,
    selfIsPlaying,
    onPlayButtonClick: () => {
      updateCurrentPlayingPlaylist(playlist.playlistSongs, playlist);
    }
    // secondaryTo: to creator/user's page
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Collection));

// depending on ownProps.type,
// we want to get all albums OR albums we follow


//in library:
// wrappedPropsLoader: () => dispatch(fetchSavedAlbums())

//playSongs(arrayOfSongObjects) action creator that comes from music_player_actions; -> updates the current array of songs that are playing