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
  updateTrackList
} from '../../actions/music_player_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: hydratedPlaylistsSelector(state.entities) || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    wrappedPropsLoader: () => dispatch(fetchAllPlaylists()),
    updateTrackList: (tracks) => dispatch(updateTrackList(tracks))
  };
};

const mergeProps = (connectedState, connectedDispatch) => {
  return {
    initialWrappedProps: {
      collectionItemInfos: connectedState.playlists.map(convertPlaylistToCollectionItemInfo),
      updateTrackList: connectedDispatch.updateTrackList
    },
    wrappedPropsLoader: () => connectedDispatch.wrappedPropsLoader()
  };
};

const convertPlaylistToCollectionItemInfo = (playlist) => {
  let coverUrl;
  playlist.coverUrl ? coverUrl = playlist.coverUrl : coverUrl = "https://s3.amazonaws.com/ghiblify-resources/Other/pink_playlist_default.jpg";
  return {
    imageUrl: coverUrl,
    title: playlist.name,
    subTitle: playlist.creator.username,
    primaryTo: `/playlists/${playlist.id}`,
    secondaryTo: '/search',
    tracks: playlist.playlistSongs
    // secondaryTo: to creator/user's page
  };
};


export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(Collection));

// depending on ownProps.type,
// we want to get all albums OR albums we follow


//in library:
// wrappedPropsLoader: () => dispatch(fetchSavedAlbums())

//playSongs(arrayOfSongObjects) action creator that comes from music_player_actions; -> updates the current array of songs that are playing