import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_ONE_PLAYLIST = 'RECEIVE_ONE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const receiveOnePlaylist = (playlist) => ({
  type: RECEIVE_ONE_PLAYLIST,
  playlist
});

export const removePlaylist = (playlistId) => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

// export const fetchAllPlaylists = () => dispatch => (
//   PlaylistApiUtil.fetchAllPlaylists()
//   .then(payload => {
//     dispatch(receiveAllPlaylists(playlists))
//   })
// );

// export const fetchOnePlaylist = (id) => dispatch => (
//   PlaylistApiUtil.fetchOnePlaylist(id)
//   .then(playlist => dispatch(receiveOnePlaylist(playlist)))
// );

// export const createPlaylist = (playlist) => dispatch => (
//   PlaylistApiUtil.createPlaylist(playlist)
//   .then(playlist => dispatch(receiveOnePlaylist(playlist)))
// );

// export const updatePlaylistName = (playlist) => dispatch => (
//   PlaylistApiUtil.updatePlaylistName(playlist)
//   .then(playlist => dispatch(receiveOnePlaylist(playlist)))
// );

// export const deletePlaylist = (id) => dispatch => (
//   Play
// )