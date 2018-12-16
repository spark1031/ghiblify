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

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: hydratedPlaylistsSelector(state.entities) || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    wrappedPropsLoader: () => dispatch(fetchAllPlaylists())
    // playSongs: (arrayOfSongObjects) => dispatch(playSongs(arrayOfSongObjects))
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  return {
    initialWrappedProps: {
      collectionItemInfos: connectedState.playlists.map(convertPlaylistToCollectionItemInfo)
    },
    wrappedPropsLoader: () => connectedDispatch.wrappedPropsLoader()
  };
};

const convertPlaylistToCollectionItemInfo = (playlist) => {
  return {
    imageUrl: playlist.coverUrl,
    title: playlist.name,
    subTitle: playlist.creator.username,
    primaryTo: '/search',
    secondaryTo: '/search'
    // primaryTo: `/browse/playlists/${album.id}`
    // secondaryTo:
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Collection));

// depending on ownProps.type,
// we want to get all albums OR albums we follow


//in library:
// wrappedPropsLoader: () => dispatch(fetchSavedAlbums())

//playSongs(arrayOfSongObjects) action creator that comes from music_player_actions; -> updates the current array of songs that are playing