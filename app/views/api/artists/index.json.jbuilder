json.artists do
  @artists.each do |artist|
    json.partial! 'api/artists/artist', artist: artist
  end
end

json.songs do
  @artists.each do |artist|
    artist.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end
  end
end

json.albums do
  @artists.each do |artist|
    artist.albums.each do |album|
      json.partial! 'api/albums/album', album: album
    end
  end
end

