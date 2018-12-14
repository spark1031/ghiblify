json.playlist_songs do 
  json.set! @playlist_song.id do
    json.extract! @playlist_song, :id, :song_id, :playlist_id
  end
end

json.songs do
  json.partial! 'api/songs/song', song: @playlist_song.song
end


json.albums do
  json.partial! 'api/albums/album', album: @playlist_song.song.album
end

json.artists do
  json.partial! 'api/artists/artist', artist: @playlist_song.song.artist
end

# may want to refactor to include artist/album associated with the added/deleted song
# only send back artist/album info IF the song's artist/album is not ALSO associated
# with current_user's other saved entities?
