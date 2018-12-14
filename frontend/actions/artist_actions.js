import * as ArtistApiUtil from '../util/artist_api_util';

import {
  receiveAllAlbums
} from './album_actions';
import {
  receiveAllSongs
} from './song_actions';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ONE_ARTIST = 'RECEIVE_ONE_ARTIST';

export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveOneArtist = (artist) => ({
  type: RECEIVE_ONE_ARTIST,
  artist
});

export const fetchAllArtists = () => dispatch => (
  ArtistApiUtil.fetchAllArtists()
  .then(payload => {
    dispatch(receiveAllArtists(payload.artists));
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllSongs(payload.songs));
  })
);

export const fetchOneArtist = (id) => dispatch => (
  ArtistApiUtil.fetchOneArtist(id)
  .then(payload => {
    dispatch(receiveOneArtist(payload.artists));
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllSongs(payload.songs));
  })
)