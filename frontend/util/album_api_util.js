export const fetchAllAlbums = () => (
  $.ajax({
    method: 'GET',
    url: 'api/albums'
  })
);

export const fetchOneAlbum = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);