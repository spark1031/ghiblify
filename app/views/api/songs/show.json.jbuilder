json.songs do
  json.partial! 'api/songs/song', song: @song
end

json.artists do
  json.partial! 'api/artists/artist', artist: @song.artist
end

json.albums do
  json.partial! 'api/albums/album', album: @song.album
end

