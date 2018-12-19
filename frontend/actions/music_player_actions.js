// ACTIONS:
// updateTrackList

// toggleIsPlaying
// playNextSong
// playPreviousSong

//ACTIONS WILL GET DISPATCHED IN MY MUSIC PLAYER!
//  inside musicPlayerContainer's mapDispatchToProps: updateTrackList: (trackList) => dispatch(updateTrackList(trackList))

//the button has to tell someone it's been pressed, and whatever is rendering the button has an onClick
// clickHandler
export const UPDATE_CURRENT_PLAYING_ALBUM = 'UPDATE_CURRENT_PLAYING_ALBUM';
export const UPDATE_CURRENT_PLAYING_PLAYLIST = 'UPDATE_CURRENT_PLAYING_PLAYLIST';
export const UPDATE_CURRENT_PLAYING_SONG_LIST = 'UPDATE_CURRENT_PLAYING_SONG_LIST';
export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING';
export const PLAY_NEXT_SONG = 'PLAY_NEXT_SONG';
export const PLAY_PREVIOUS_SONG = 'PLAY_PREVIOUS_SONG';

//trackList is an array of songs (for a given playlist/album)
//corresponding reducer should replace the existing trackList with this new trackList
export const updateCurrentPlayingAlbum = (trackList, album, currentSongIndex = 0) => ({
  type: UPDATE_CURRENT_PLAYING_ALBUM,
  trackList,
  album,
  currentSongIndex
});

export const updateCurrentPlayingPlaylist = (trackList, playlist, currentSongIndex = 0) => ({
  type: UPDATE_CURRENT_PLAYING_PLAYLIST,
  trackList,
  playlist,
  currentSongIndex
});

export const updateCurrentPlayingSongList = (trackList, currentSongIndex = 0) => ({
  type: UPDATE_CURRENT_PLAYING_SONG_LIST,
  trackList,
  currentSongIndex
});

//this is to pause or play the music
//corresponding reducer should set isPlaying = !isPlaying (isPlaying is a key in my musicPlayer ui in global state)
export const toggleIsPlaying = () => ({
  type: TOGGLE_IS_PLAYING
});

export const playNextSong = () => ({
  type: PLAY_NEXT_SONG
});

export const playPrevSong = () => ({
  type: PLAY_PREVIOUS_SONG
});