export const fetchAllPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/playlists'
  })
);

export const fetchOnePlaylist = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data: {
      playlist
    }
  })
);

export const updatePlaylistName = (playlist) => (
  $.ajax({
    method: 'PATCH',
    url: `api/playlists/${playlist.id}`,
    data: {
      playlist
    }
  })
);

export const deletePlaylist = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/playlists/${id}`
  })
);