import {
  connect
} from 'react-redux';

import {
  fetchAllPlaylists
} from '../../actions/playlist_actions';

import {
  fetchAllSongs
} from '../../actions/song_actions';

import Search from './search';

const mapStateToProps = state => {
  return {
    entities: state.entities
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllPlaylists: () => dispatch(fetchAllPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);