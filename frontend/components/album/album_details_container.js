//must pass down the following to Details:
// props = {
// 	imageUrl:
// 	title:
// 	subTitle:
// 	songsArr:
// 	detailsText: "2014 • 19 SONGS" OR "19 SONGS"
// }
import {
  connect
} from 'react-redux';
import {
  hydratedSingleAlbumSelector
} from '../../reducers/selectors';
import {
  fetchOneAlbum
} from '../../actions/album_actions';
import Details from '../collection/details';
import loader from '../hocs/loader';

import {
  toggleIsPlaying,
  updateCurrentPlayingAlbum
} from '../../actions/music_player_actions';

const mapStateToProps = (state, ownProps) => {
  const albumId = +ownProps.match.params.albumId;
  const album = hydratedSingleAlbumSelector(state.entities, albumId);
  if (album === undefined) return {};
  return {
    currentPlayingAlbum: state.ui.musicPlayer.currentPlayingAlbum,
    typeObject: state.entities.albums[albumId],
    imageUrl: album.coverUrl,
    title: album.title,
    subTitle: album.artist.name,
    songsArr: album.albumSongs,
    detailsText: `${album.year} • ${album.albumSongs.length} SONGS`,
    type: "album"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const albumId = ownProps.match.params.albumId;
  return {
    fetchOneAlbumLoader: () => dispatch(fetchOneAlbum(albumId)),
    updateTrackList: (tracks, typeObject, currentSongIndex) => dispatch(updateCurrentPlayingAlbum(tracks, typeObject, currentSongIndex)),
    toggleIsPlaying: () => dispatch(toggleIsPlaying())
  };
};

const mergeProps = (connectedProps, connectedDispatch) => {
  const {
    fetchOneAlbumLoader,
    updateTrackList,
    toggleIsPlaying,
  } = connectedDispatch;

  const {
    currentPlayingAlbum,
    ...restConnectedProps
  } = connectedProps;

  const finalUpdateTrackList = (tracks, typeObject, currentSongIndex) => {
    if (currentPlayingAlbum && (currentPlayingAlbum.id === typeObject.id)) {
      toggleIsPlaying();
    } else {
      updateTrackList(tracks, typeObject, currentSongIndex);
    }
  }

  return {
    initialWrappedProps: {
      updateTrackList: finalUpdateTrackList,
      ...restConnectedProps,
    },
    wrappedPropsLoader: () => fetchOneAlbumLoader(),
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Details));