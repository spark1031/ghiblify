import PlayingSongInfo from './playing_song_info';
import {
  connect
} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const currentSongIdx = state.ui.musicPlayer.currentSongIndex;
  const currentSong = state.ui.musicPlayer.trackList[currentSongIdx];

  if (currentSong) {
    const currentSongAlbum = state.entities.albums[currentSong.albumId];
    const currentSongArtist = state.entities.artists[currentSong.artistId];
    return ({
      currentSong,
      currentSongAlbum,
      currentSongArtistName: currentSongArtist.name
    });
  } else {
    return ({
      currentSong: undefined,
      currentSongAlbum: undefined,
      currentSongArtistName: undefined
    });
  }

};


export default connect(mapStateToProps, null)(PlayingSongInfo);