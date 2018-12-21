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

import * as _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const musicPlayer = state.ui.musicPlayer;
  let albums = hydratedAlbumsSelector(state.entities) || [];
  if (ownProps.albums) {
    albums = hydratedAlbumsSelector(state.entities, ownProps.albums) || [];
  }
  return {
    albums,
    currentSong: musicPlayer.trackList[musicPlayer.currentSongIndex],
    currentPlayingAlbum: musicPlayer.currentPlayingAlbum,
    isPlaying: musicPlayer.isPlaying
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
      collectionItemInfos: _.compact(connectedState.albums.map(album => convertAlbumToCollectionItemInfo(album, connectedState.currentPlayingAlbum, updateCurrentPlayingAlbum, connectedState.isPlaying))),
    },
    wrappedPropsLoader: () => connectedDispatch.wrappedPropsLoader()
  };
};

const convertAlbumToCollectionItemInfo = (album, currentPlayingAlbum, updateCurrentPlayingAlbum, isPlaying) => {
  const selfIsPlaying = currentPlayingAlbum && isPlaying ? album.id === currentPlayingAlbum.id : false;
  if (album && album.artist) {
    return {
      imageUrl: album.coverUrl,
      title: album.title,
      subTitle: album.artist.name,
      primaryTo: `/albums/${album.id}`,
      secondaryTo: '/artists',
      tracks: album.albumSongs,
      selfIsPlaying,
      onPlayButtonClick: () => {
        updateCurrentPlayingAlbum(album.albumSongs, album);
      }
      // primaryTo: `/browse/albums/${album.id}`
      // secondaryTo:
    };
  } else {
    return undefined;
  }

};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Collection));

// depending on ownProps.type,
// we want to get all albums OR albums we follow


//in library:
// wrappedPropsLoader: () => dispatch(fetchSavedAlbums())

//playSongs(arrayOfSongObjects) action creator that comes from music_player_actions; -> updates the current array of songs that are playing