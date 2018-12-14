json.set! album.id do
  json.extract! album, :id, :title, :year, :genre, :artist_id
  if album.cover_url.attached?
    json.cover_url url_for(album.cover_url)
  end
end