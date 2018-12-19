import {
  connect
} from 'react-redux';
import Collection from '../collection/collection';
import loader from '../hocs/loader';
import {
  fetchAllAlbums
} from '../../actions/album_actions';
import {
  hydratedAlbumsSelector
} from '../../reducers/selectors';

import {
  updateCurrentPlayingAlbum,
  toggleIsPlaying
} from '../../actions/music_player_actions';

const mapStateToProps = (state, ownProps) => {
  const musicPlayer = state.ui.musicPlayer;
  return {
    albums: hydratedAlbumsSelector(state.entities) || [],
    currentSong: musicPlayer.trackList[musicPlayer.currentSongIndex],
    currentPlayingAlbum: musicPlayer.currentPlayingAlbum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    wrappedPropsLoader: () => dispatch(fetchAllAlbums()),
    updateCurrentPlayingAlbum: (trackList, album) => dispatch(updateCurrentPlayingAlbum(trackList, album)),
    toggleIsPlaying: () => dispatch(toggleIsPlaying())
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  const updateCurrentPlayingAlbum = (trackList, album) => {
    if (connectedState.currentPlayingAlbum && (connectedState.currentPlayingAlbum.id === album.id)) {
      connectedDispatch.toggleIsPlaying();
    } else {
      connectedDispatch.updateCurrentPlayingAlbum(trackList, album);
    }
  };
  return {
    initialWrappedProps: {
      collectionItemInfos: connectedState.albums.map(album => convertAlbumToCollectionItemInfo(album, connectedState.currentPlayingAlbum, updateCurrentPlayingAlbum)),
    },
    wrappedPropsLoader: () => connectedDispatch.wrappedPropsLoader()
  };
};

const convertAlbumToCollectionItemInfo = (album, currentPlayingAlbum, updateCurrentPlayingAlbum) => {
  const isPlaying = currentPlayingAlbum ? album.id === currentPlayingAlbum.id : false;
  return {
    imageUrl: album.coverUrl,
    title: album.title,
    subTitle: album.artist.name,
    primaryTo: `/albums/${album.id}`,
    secondaryTo: '/artists',
    tracks: album.albumSongs,
    onPlayButtonClick: () => {
      updateCurrentPlayingAlbum(album.albumSongs, album);
    }
    // primaryTo: `/browse/albums/${album.id}`
    // secondaryTo:
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Collection));

// depending on ownProps.type,
// we want to get all albums OR albums we follow


//in library:
// wrappedPropsLoader: () => dispatch(fetchSavedAlbums())

//playSongs(arrayOfSongObjects) action creator that comes from music_player_actions; -> updates the current array of songs that are playing