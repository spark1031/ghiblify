json.albums do
  @albums.each do |album|
    json.partial! 'api/albums/album', album: album
  end
end

json.songs do
  @albums.each do |album|
    album.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end
  end
end

json.artists do
  @albums.each do |album|
    json.partial! 'api/artists/artist', artist: album.artist
  end
end