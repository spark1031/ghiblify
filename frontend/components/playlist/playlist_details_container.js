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
  hydratedSinglePlaylistSelector
} from '../../reducers/selectors';
import {
  fetchOnePlaylist
} from '../../actions/playlist_actions';
import Details from '../collection/details';
import loader from '../hocs/loader';
import {
  withRouter
} from 'react-router-dom';

import {
  updateTrackList
} from '../../actions/music_player_actions';

import {
  deletePlaylist as deletePlaylistAction
} from '../../actions/playlist_actions';


const mapStateToProps = (state, ownProps) => {
  const playlistId = +ownProps.match.params.playlistId;
  const playlist = hydratedSinglePlaylistSelector(state.entities, playlistId);
  if (playlist === undefined) return {};
  return {
    currentUserId: state.session.id,
    typeObject: state.entities.playlists[playlistId],
    imageUrl: playlist.coverUrl,
    title: playlist.name,
    subTitle: playlist.creator.username,
    songsArr: playlist.playlistSongs,
    detailsText: `${playlist.playlistSongs.length} SONGS`,
    type: "playlist"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const playlistId = ownProps.match.params.playlistId;
  return {
    fetchOnePlaylistLoader: () => dispatch(fetchOnePlaylist(playlistId)),
    deletePlaylist: (id) => dispatch(deletePlaylistAction(id)),
    updateTrackList: (tracks) => dispatch(updateTrackList(tracks))
  };
};

const mergeProps = (connectedProps, connectedDispatch) => {
  const {
    fetchOnePlaylistLoader,
    ...restConnectedDispatch
  } = connectedDispatch;
  return {
    initialWrappedProps: {
      ...connectedProps,
      ...restConnectedDispatch
    },
    wrappedPropsLoader: () => fetchOnePlaylistLoader(),
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(withRouter(Details)));