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

const mapStateToProps = (state, ownProps) => {
  const albumId = +ownProps.match.params.albumId;
  const album = hydratedSingleAlbumSelector(state.entities, albumId);
  if (album === undefined) {
    return {
      initialWrappedProps: undefined
    };
  }
  return {
    initialWrappedProps: {
      imageUrl: album.coverUrl,
      title: album.title,
      subTitle: album.artist.name,
      songsArr: album.albumSongs,
      detailsText: `${album.year} • ${album.albumSongs.length} SONGS`
    }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const albumId = ownProps.match.params.albumId;
  return {
    wrappedPropsLoader: () => dispatch(fetchOneAlbum(albumId))
    // playSongs:
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(loader(Details));