json.artists do
  json.partial! 'api/artists/artist', artist_id: @artist.id
end

json.albums do
  @artist.albums.each do |album|
    json.partial! 'api/albums/album', album_id: album.id
  end
end

json.songs do
  @artist.songs.each do |song|
    json.partial! 'api/songs/song', song_id: song.id
  end
end

