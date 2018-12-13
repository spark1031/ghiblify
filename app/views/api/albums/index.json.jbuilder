json.albums do
  @albums.each do |album|
    json.partial! 'api/albums/album', album_id: album.id
  end
end

json.songs do
  @albums.each do |album|
    album.songs.each do |song|
      json.partial! 'api/songs/song', song_id: song.id
    end
  end
end

json.artists do
  @albums.each do |album|
    json.partial! 'api/artists/artist', artist_id: album.artist_id
  end
end