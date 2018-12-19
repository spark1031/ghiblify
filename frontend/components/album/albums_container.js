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
  updateTrackList
} from '../../actions/music_player_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: hydratedAlbumsSelector(state.entities) || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    wrappedPropsLoader: () => dispatch(fetchAllAlbums()),
    updateTrackList: (tracks) => dispatch(updateTrackList(tracks))
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  return {
    initialWrappedProps: {
      collectionItemInfos: connectedState.albums.map(convertAlbumToCollectionItemInfo),
      updateTrackList: connectedDispatch.updateTrackList
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
    secondaryTo: '/artists',
    tracks: album.albumSongs
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