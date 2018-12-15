import {
  connect
} from 'react-redux';
import {
  createPlaylist
} from '../../actions/playlist_actions';
import Button from './_button';

const mapStateToProps = state => {
  return {
    buttonType: "NEW PLAYLIST",
    to: "/library/playlists"
  };
};