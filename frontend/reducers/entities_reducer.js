import {
  combineReducers
} from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';
import playlistsReducer from './playlists_reducer';
import playlistSongsReducer from './playlist_songs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer,
  playlistSongs: playlistSongsReducer
});

export default entitiesReducer;