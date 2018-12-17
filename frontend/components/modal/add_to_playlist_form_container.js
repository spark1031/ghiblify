import {
  connect
} from 'react-redux';
import AddToPlaylistForm from './add_to_playlist_form';
import {
  addSongToPlaylist
} from '../../actions/playlist_song_actions';
import {
  withRouter
}
from "react-router-dom";
import {
  receiveErrors,
  clearErrors
} from '../../actions/session_actions';
import loader from "../hocs/loader";
import {
  currentUserPlaylistsSelector
} from '../../reducers/selectors';

import {
  fetchAllPlaylists
} from '../../actions/playlist_actions';


const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.id;
  return {
    errors: state.errors.session,
    currentUserId,
    songId: ownProps.songId,
    currentUserPlaylists: currentUserPlaylistsSelector(state.entities, currentUserId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let closeModal = ownProps.closeModal;
  return {
    closeModal: () => dispatch(closeModal()),
    addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllPlaylistsLoader: () => dispatch(fetchAllPlaylists())
  };
};

const mergeProps = (connectedProps, connectedDispatch) => {
  const {
    fetchAllPlaylistsLoader,
    ...restConnectedDispatch
  } = connectedDispatch;
  return {
    initialWrappedProps: {
      ...connectedProps,
      ...restConnectedDispatch
    },
    wrappedPropsLoader: () => fetchAllPlaylistsLoader(),
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(loader(AddToPlaylistForm));