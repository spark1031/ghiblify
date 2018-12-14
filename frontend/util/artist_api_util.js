export const fetchAllArtists = () => ({
  method: 'GET',
  url: 'api/artists'
});

export const fetchOneArtist = (id) => ({
  method: 'GET',
  url: `api/artists/${id}`
});