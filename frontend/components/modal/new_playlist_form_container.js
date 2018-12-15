import {
  connect
} from 'react-redux';
import NewPlaylistForm from './new_playlist_form';
import {
  createPlaylist
} from '../../actions/playlist_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  let {
    closeModal
  } = ownProps;
  return {
    closeModal: () => dispatch(closeModal()),
    action: (playlist) => dispatch(createPlaylist(playlist))
  };
};

export default connect(null, mapDispatchToProps)(NewPlaylistForm);