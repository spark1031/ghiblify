export const fetchAllArtists = () => (
  $.ajax({
    method: 'GET',
    url: 'api/artists'
  })
);

export const fetchOneArtist = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/artists/${id}`
  })
);