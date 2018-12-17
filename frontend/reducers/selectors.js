import * as _ from 'lodash';

export const hydratedAlbumsSelector = (entities) => {
  const albums = entities.albums;
  const artists = entities.artists;
  if (_.isEmpty(albums) || _.isEmpty(artists)) {
    return undefined;
  }
  const result = Object.values(albums).map(album => {
    const artist = artists[album.artistId];
    if (_.isUndefined(artist)) {
      return undefined;
    } else {
      return {
        ...album,
        artistId: undefined,
        artist
      };
    }
  });
  return _.compact(result);
}

export const hydratedSingleAlbumSelector = (entities, albumId) => {
  const album = entities.albums[albumId];
  const artists = entities.artists;
  const songs = entities.songs;
  if (_.isUndefined(album) || _.isEmpty(artists)) {
    return undefined;
  }

  const albumSongs = [];
  Object.values(songs).forEach(song => {
    if (song.albumId === albumId) {
      albumSongs.push(song)
    };
  });

  const artist = artists[album.artistId];
  if (_.isUndefined(artist)) return undefined;
  return {
    ...album,
    artistId: undefined,
    artist: artists[artist.id],
    albumSongs
  };

}

//converts creator_id to user's name
export const hydratedPlaylistsSelector = (entities) => {
  const playlists = entities.playlists;
  const users = entities.users;

  if (_.isEmpty(playlists) || _.isEmpty(users)) {
    return undefined;
  }
  const result = Object.values(playlists).map(playlist => {
    const creator = users[playlist.creatorId];

    return {
      ...playlist,
      creatorId: undefined,
      creator
    };
  });
  return result;
}


export const currentUserPlaylistsSelector = (entities, currentUserId) => {
  const playlists = entities.playlists;
  // const playlistSongs = entities.playlistSongs;
  // if (_.isEmpty(playlists) || _.isEmpty(playlistSongs)) {
  //   return undefined;
  // }
  if (_.isEmpty(playlists)) {
    return undefined;
  }

  const currentUserPlaylists = [];
  Object.values(playlists).forEach(playlist => {
    if (`${playlist.creatorId}` === currentUserId) {
      currentUserPlaylists.push(playlist)
    };
  });

  return currentUserPlaylists
}



export const albumSongsSelector = (entities, albumId) => {
  const songs = [];
  Object.values(songEntities).forEach(song => {
    if (song.album_id === targetId) {
      songs.push(song);
    }
  });
  return songs;
}


// export const playlistSongsSelector = (songEntities, targetId) => {
//   const songs = [];
//   Object.values(songEntities).forEach(song => {
//     if (song.album_id === targetId) {
//       songs.push(song);
//     }
//   });
//   return songs;
// }



// const playlistSongSelector = (targetPlaylistId, entities) => {
//   const songs = [];
//   const keys = _.keys(entities.playlistSongs);
//   Object.keys()
//   keys.forEach(playlistSongId => {
//     if (entities.playlistSongs[playlistSongId].playlistId === targetPlaylistId) {
//       songs.push(entities.playlistSongs[playlistSongId].songId);
//     }
//   });
//   return songs.map((songId => entities.songs[songId]));
// }

// const savedPlaylists = (targetUserId, entities) => {
//   const playlists = [];
//   Object.keys(entities.playlistSongs).forEach(playlistSaveId => {
//     if (entities.playlistSaves[playlistSaveId].userId === targetUserId) {
//       playlists.push(entities.playlistSaves[playlistSaveId]);
//     }
//   });
//   return playlists;
// };