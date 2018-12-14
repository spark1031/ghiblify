json.songs do
  json.partial! 'api/songs/song', song_id: @song.id
end

json.artists do
  json.partial! 'api/artists/artist', artist_id: @song.artist.id
end

json.albums do
  json.partial! 'api/albums/album', album_id: @song.album.id
end

