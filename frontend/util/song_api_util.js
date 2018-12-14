export const fetchAllSongs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/songs'
  })
);

export const fetchOneSong = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
);