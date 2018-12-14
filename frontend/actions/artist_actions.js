import * as ArtistApiUtil from '../util/artist_api_util';

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

export const fetchAllArtists = dispatch => (
  ArtistApiUtil.fetchAllArtists()
  .then(payload => {
    dispatch(receiveAllArtists(payload.artists));
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllSongs(payload.songs));
  })
);

export const fetchOneArtist = dispatch => (
  ArtistApiUtil.fetchOneArtist()
  .then(payload => {
    dispatch(receiveOneArtist(payload.artists));
    dispatch(receiveAllAlbums(payload.albums));
    dispatch(receiveAllSongs(payload.songs));
  })
)