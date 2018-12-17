json.playlists do
  @playlists.each do |playlist|
    json.partial! 'api/playlists/playlist', playlist: playlist
  end
end

json.songs do
  @playlists.each do |playlist|
    playlist.songs.each do |song|
      json.partial! 'api/songs/song', song: song
    end
  end
end

json.albums do
  @playlists.each do |playlist|
    playlist.albums.each do |album|
      json.partial! 'api/albums/album', album: album
    end 
  end
end

json.artists do 
  @playlists.each do |playlist|
    playlist.artists.each do |artist|
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end

json.users do
  @playlists.each do |playlist|
    json.partial! 'api/users/user', user: playlist.creator
  end
end

json.playlistSongs do
  @playlists.each do |playlist|
    playlist.playlist_songs.each do |playlist_song|
      json.partial! 'api/playlist_songs/ps', playlist_song: playlist_song
    end
  end
end

# need to also have songs, albums, artists associated with each playlist!!!