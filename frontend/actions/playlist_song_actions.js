import * as PlaylistSongApiUtil from '../util/playlist_song_api_util';

import {
  receiveOneSong
} from './song_actions';
import {
  receiveOneAlbum
} from './album_actions';
import {
  receiveOneArtist
} from './artist_actions';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receivePlaylistSong = (playlistSong) => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong
});

export const removePlaylistSong = (playlistSongId) => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSongId
});

export const addSongToPlaylist = (songId, playlistId) => dispatch => (
  PlaylistSongApiUtil.addSongToPlaylist(songId, playlistId)
  .then(payload => {
    dispatch(receivePlaylistSong(payload.playlistSongs));
    dispatch(receiveOneSong(payload.songs));
    dispatch(receiveOneAlbum(payload.albums));
    dispatch(receiveOneArtist(payload.artists));
  })
);

export const removeSongFromPlaylist = (playlistSongId) => dispatch => (
  PlaylistSongApiUtil.removeSongFromPlaylist(playlistSongId)
  .then(payload => {
    dispatch(removePlaylistSong(playlistSongId));
  })
);