json.playlists do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

#need to change logic once I add saves
## only want to send SONG data back if the song does not already
## exist in current_user's saves OR if the song is only associated with this
## particular playlist - that way I don't send back an already existing song 
## OR delete an song from my store that is needed for another playlist/album/artist
json.songs do
  @playlist.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end

#need to change logic once I add saves
## only want to send ALBUM and ARTIST data back if the album/artist does not already
## exist in current_user's saves OR if the album/artist is only associated with this
## particular playlist - that way I don't send back an already existing artist/album 
## OR delete an album/artist from my store that is needed for another playlist/album/artist
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