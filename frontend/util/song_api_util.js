export const fetchAllSongs = () => ({
  method: 'GET',
  url: 'api/songs'
});

export const fetchOneSong = (id) => ({
  method: 'GET',
  url: `api/songs/${id}`
});