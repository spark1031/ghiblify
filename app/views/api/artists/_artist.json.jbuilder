artist = Artist.find(artist_id)
json.set! artist_id do
  json.extract! artist, :id, :name
end

