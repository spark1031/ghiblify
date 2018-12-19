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
  updateTrackList
} from '../../actions/music_player_actions';

const mapStateToProps = (state, ownProps) => {
  const albumId = +ownProps.match.params.albumId;
  const album = hydratedSingleAlbumSelector(state.entities, albumId);
  if (album === undefined) return {};
  return {
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
    updateTrackList: (tracks) => dispatch(updateTrackList(tracks))
  };
};

const mergeProps = (connectedProps, connectedDispatch) => {
  const {
    fetchOneAlbumLoader,
    ...restConnectedDispatch
  } = connectedDispatch;
  return {
    initialWrappedProps: {
      ...connectedProps,
      ...restConnectedDispatch
    },
    wrappedPropsLoader: () => fetchOneAlbumLoader(),
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Details));