import {
  connect
} from 'react-redux';

import {
  toggleIsPlaying,
  playNextSong,
  playPrevSong
} from '../../actions/music_player_actions';

import MusicPlayer from './music_player';


const mapStateToProps = state => {
  const idx = state.ui.musicPlayer.currentSongIndex;
  return {
    currentSong: state.ui.musicPlayer.trackList[idx],
    isPlaying: state.ui.musicPlayer.isPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTogglePlaying: () => dispatch(toggleIsPlaying()),
    onNextSong: () => dispatch(playNextSong()),
    onPrevSong: () => dispatch(playPrevSong())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);