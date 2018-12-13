album = Album.find(album_id)
json.set! album_id do
  json.extract! album, :id, :title, :year, :genre, :artist_id
end