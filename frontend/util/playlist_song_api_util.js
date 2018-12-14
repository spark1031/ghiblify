export const addSongToPlaylist = (songId, playlistId) => (
  $.ajax({
    method: 'POST',
    url: 'api/playlist_songs',
    data: {
      playlist_songs: {
        song_id: songId,
        playlist_id: playlistId
      }
    }
  })
);

export const removeSongFromPlaylist = (playlistSongId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlist_songs/${playlistSongId}`
  })
);