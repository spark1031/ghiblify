import * as PlaylistApiUtil from '../util/playlist_api_util';
import {
  receiveAllSongs
} from './song_actions';
import {
  receiveAllAlbums
} from './album_actions';
import {
  receiveAllArtists
} from './artist_actions';

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

export const fetchAllPlaylists = () => dispatch => (
  PlaylistApiUtil.fetchAllPlaylists()
  .then(payload => {
    dispatch(receiveAllPlaylists(payload.playlists));
    dispatch(receiveAllArtists(payload.artists));
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllSongs(payload.songs));
  })
);

export const fetchOnePlaylist = (id) => dispatch => (
  PlaylistApiUtil.fetchOnePlaylist(id)
  .then(payload => {
    dispatch(receiveOnePlaylist(payload.playlists));
    dispatch(receiveAllSongs(payload.songs));
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllArtists(payload.artists));
  })
);

export const createPlaylist = (playlist) => dispatch => (
  PlaylistApiUtil.createPlaylist(playlist)
  .then(payload => {
    dispatch(receiveOnePlaylist(payload.playlists));
  })
);

export const updatePlaylistName = (playlist) => dispatch => (
  PlaylistApiUtil.updatePlaylistName(playlist)
  .then(payload => {
    dispatch(receiveOnePlaylist(payload.playlists));
  })
);

export const deletePlaylist = (id) => dispatch => (
  PlaylistApiUtil.deletePlaylist(id)
  .then(payload => {
    dispatch(removePlaylist(id));
  })
);