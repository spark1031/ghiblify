import {
  connect
} from 'react-redux';
import SongList from './song_list';
import {
  addSongToPlaylist,
  removeSongFromPlaylist
} from '../../actions/playlist_song_actions';
import {
  openModal
} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    songsArr: ownProps.songsArr,
    typeObject: ownProps.typeObject, //playlist or album object, non-hydrated, for SongListItem
    type: ownProps.type,
    currentUserId: ownProps.currentUserId
    // playlistSongs: state.entities.playlistSongs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
    removeSongFromPlaylist: (playlistSongId) => dispatch(removeSongFromPlaylist(playlistSongId)),
    openModal: (modal, modalInfo) => dispatch(openModal(modal, modalInfo))
    // playSongs:
  };
};

export default connect(null, mapDispatchToProps)(SongList);