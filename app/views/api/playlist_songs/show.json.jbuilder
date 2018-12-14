json.playlist_songs do 
  json.set! @playlist_song.id do
    json.extract! @playlist_song, :id, :song_id, :playlist_id
  end
end

json.songs do
  json.partial! 'api/songs/song', song: @playlist_song.song
end
