import {
  connect
} from 'react-redux';
import NewPlaylistForm from './new_playlist_form';
import {
  createPlaylist
} from '../../actions/playlist_actions';
import {
  withRouter
}
from "react-router-dom";
import {
  receiveErrors,
  clearErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let {
    closeModal
  } = ownProps;
  return {
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (playlist, history) => dispatch(createPlaylist(playlist, history)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm));