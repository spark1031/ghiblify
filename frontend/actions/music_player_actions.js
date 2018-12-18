// ACTIONS:
// updateTrackList

// toggleIsPlaying
// playNextSong
// playPreviousSong

//ACTIONS WILL GET DISPATCHED IN MY MUSIC PLAYER!
//  inside musicPlayerContainer's mapDispatchToProps: updateTrackList: (trackList) => dispatch(updateTrackList(trackList))

//the button has to tell someone it's been pressed, and whatever is rendering the button has an onClick
// clickHandler
export const UPDATE_TRACK_LIST = 'UPDATE_TRACK_LIST';
export const TOGGLE_IS_PLAYING = 'TOGGLE_IS_PLAYING';
export const PLAY_NEXT_SONG = 'PLAY_NEXT_SONG';
export const PLAY_PREVIOUS_SONG = 'PLAY_PREVIOUS_SONG';

//trackList is an array of songs (for a given playlist/album)
//corresponding reducer should replace the existing trackList with this new trackList
export const updateTrackList = (trackList) => ({
  type: UPDATE_TRACK_LIST,
  trackList
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