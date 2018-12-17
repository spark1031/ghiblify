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

const mapStateToProps = (state, ownProps) => {
  return {
    albums: hydratedAlbumsSelector(state.entities) || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    wrappedPropsLoader: () => dispatch(fetchAllAlbums())
    // playSongs: (arrayOfSongObjects) => dispatch(playSongs(arrayOfSongObjects))
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  return {
    initialWrappedProps: {
      collectionItemInfos: connectedState.albums.map(convertAlbumToCollectionItemInfo)
    },
    wrappedPropsLoader: () => connectedDispatch.wrappedPropsLoader()
  };
};

const convertAlbumToCollectionItemInfo = (album) => {
  return {
    imageUrl: album.coverUrl,
    title: album.title,
    subTitle: album.artist.name,
    primaryTo: `/albums/${album.id}`,
    secondaryTo: '/search'
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