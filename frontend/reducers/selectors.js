import * as _ from 'lodash';

export const hydratedAlbumsSelector = (entities, albums = entities.albums) => {
  // const albums = entities.albums;

  const artists = entities.artists;
  if (_.isEmpty(albums) || _.isEmpty(artists)) {
    return undefined;
  }

  const result = Object.values(albums).map(album => {
    const songsArr = albumSongSelector(album.id, entities);
    const artist = artists[album.artistId];
    if (_.isUndefined(artist)) {
      return undefined;
    } else {
      return {
        ...album,
        artistId: undefined,
        artist,
        albumSongs: songsArr
      };
    }
  });
  return _.compact(result);
}

const albumSongSelector = (albumId, entities) => {
  const songs = entities.songs;

  const songsArr = [];
  Object.values(songs).forEach(song => {
    if (song.albumId === albumId) {
      songsArr.push(song)
    }
  });
  return songsArr;
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

export const hydratedSinglePlaylistSelector = (entities, playlistId) => {
  const playlist = entities.playlists[playlistId];
  const users = entities.users;
  const playlistSongsJoins = entities.playlistSongs;
  const songs = entities.songs;
  if (_.isUndefined(playlist) || _.isEmpty(users)) {
    return undefined;
  }

  const songsArr = [];
  Object.values(playlistSongsJoins).forEach(association => {
    if (association.playlistId === playlistId) {
      const songId = association.songId;
      let songObject = songs[songId];
      let playlistSongsKey = "playlistSongsKey"
      songObject[playlistSongsKey] = association.id;
      songsArr.push(songObject)
    }
  });

  const user = users[playlist.creatorId];
  if (_.isUndefined(user)) return undefined;
  return {
    ...playlist,
    creatorId: undefined,
    creator: users[user.id],
    playlistSongs: songsArr
  };
}

//converts creator_id to user's name
export const hydratedPlaylistsSelector = (entities, playlists = entities.playlists) => {
  // const playlists = entities.playlists;
  const users = entities.users;

  if (_.isEmpty(playlists) || _.isEmpty(users)) {
    return undefined;
  }
  const result = Object.values(playlists).map(playlist => {
    const creator = users[playlist.creatorId];
    const songsArr = playlistSongSelector(playlist.id, entities); //ADDED THIS LINE

    if (creator) {
      return {
        ...playlist,
        creatorId: undefined,
        creator,
        playlistSongs: songsArr //ADDED THIS LINE
      };
    } else {
      return undefined;
    }
  });
  return _.compact(result);
}

//ADDED THIS FUNCTION
const playlistSongSelector = (playlistId, entities) => {
  const playlistSongsJoins = entities.playlistSongs;
  const songs = entities.songs;

  const songsArr = [];
  Object.values(playlistSongsJoins).forEach(association => {
    if (association.playlistId === playlistId) {
      const songId = association.songId;
      let songObject = songs[songId];
      let playlistSongsKey = "playlistSongsKey"
      songObject[playlistSongsKey] = association.id;
      songsArr.push(songObject)
    }
  });
  return songsArr;
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





// const savedPlaylists = (targetUserId, entities) => {
//   const playlists = [];
//   Object.keys(entities.playlistSongs).forEach(playlistSaveId => {
//     if (entities.playlistSaves[playlistSaveId].userId === targetUserId) {
//       playlists.push(entities.playlistSaves[playlistSaveId]);
//     }
//   });
//   return playlists;
// };