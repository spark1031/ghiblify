import * as SongApiUtil from '../util/song_api_util';

import {
  receiveAllAlbums
} from './album_actions';
import {
  receiveAllArtists
} from './artist_actions';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ONE_SONG = 'RECEIVE_ONE_SONG';

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveOneSong = (song) => ({
  type: RECEIVE_ONE_SONG,
  song
});

export const fetchAllSongs = () => dispatch => (
  SongApiUtil.fetchAllSongs()
  .then(payload => {
    dispatch(receiveAllSongs(payload.songs));
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllArtists(payload.artists));
  })
);