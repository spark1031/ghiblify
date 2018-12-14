json.playlists do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

json.songs do
  @playlist.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end

json.albums do
  @playlist.albums.each do |album|
    json.partial! 'api/albums/album', album: album
  end
end

json.artists do 
  @playlist.artists.each do |artist|
    json.partial! 'api/artists/artist', artist: artist
  end
end