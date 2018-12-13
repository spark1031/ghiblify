song = Song.find(song_id)
json.set! song_id do
  json.extract! song, :id, :title, :duration, :artist_id, :album_id
end

