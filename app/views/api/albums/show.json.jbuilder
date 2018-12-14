json.albums do
  json.partial! 'api/albums/album', album_id: @album.id
end

json.songs do
  @album.songs.each do |song|
    json.partial! 'api/songs/song', song_id: song.id
  end
end

json.artists do
  json.partial! 'api/artists/artist', artist_id: @album.artist.id
end