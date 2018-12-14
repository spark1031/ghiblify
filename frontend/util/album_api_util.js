export const fetchAllAlbums = () => ({
  method: 'GET',
  url: 'api/albums'
});

export const fetchOneAlbum = (id) => ({
  method: 'GET',
  url: `api/albums/${id}`
});