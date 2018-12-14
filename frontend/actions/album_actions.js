import * as AlbumApiUtil from '../util/album_api_util';
import {
  receiveAllSongs
} from './song_actions';
import {
  receiveAllArtists,
  receiveOneArtist
} from './artist_actions';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ONE_ALBUM = 'RECEIVE_ONE_ALBUM';

export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveOneAlbum = (album) => ({
  type: RECEIVE_ONE_ALBUM,
  album
});

//necessary for frontend route: "browse/albums"
//fetchAllAlbums returns all albums AND their respective songs and artists (aka payload)
export const fetchAllAlbums = dispatch => (
  AlbumApiUtil.fetchAllAlbums()
  .then(payload => {
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllSongs(payload.songs));
    dispatch(receiveAllArtists(payload.artists));
  })
);

export const fetchOneAlbum = dispatch => (
  AlbumApiUtil.fetchOneAlbum()
  .then(payload => {
    dispatch(receiveOneAlbum(payload.albums));
    dispatch(receiveOneArtist(payload.artists));
    dispatch(receiveAllSongs(payload.songs));
  })
);