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

import {
  receiveOnePlaylist
} from './playlist_actions';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const RECEIVE_ALL_PLAYLIST_SONGS = 'RECEIVE_ALL_PLAYLIST_SONGS';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receivePlaylistSong = (playlistSong) => ({
  type: RECEIVE_PLAYLIST_SONG,
  playlistSong
});

export const receiveAllPlaylistSongs = (playlistSongs) => ({
  type: RECEIVE_ALL_PLAYLIST_SONGS,
  playlistSongs
});

export const removePlaylistSong = (playlistSongId) => ({
  type: REMOVE_PLAYLIST_SONG,
  playlistSongId
});

export const addSongToPlaylist = (songId, playlistId) => dispatch => (
  PlaylistSongApiUtil.addSongToPlaylist(songId, playlistId)
  .then(payload => {
    dispatch(receivePlaylistSong(payload.playlistSongs));
    dispatch(receiveOnePlaylist(payload.playlists));
    dispatch(receiveOneSong(payload.songs));
    dispatch(receiveOneAlbum(payload.albums));
    dispatch(receiveOneArtist(payload.artists));
    // dispatch(updateCurrentPlayingPlaylist(payload.songs, payload.playlists, null));
  })
);

export const removeSongFromPlaylist = (playlistSongId) => dispatch => (
  PlaylistSongApiUtil.removeSongFromPlaylist(playlistSongId)
  .then(payload => {
    dispatch(removePlaylistSong(playlistSongId));
  })
);