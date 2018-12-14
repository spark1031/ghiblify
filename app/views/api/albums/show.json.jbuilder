json.albums do
  json.partial! 'api/albums/album', album: @album
end

json.songs do
  @album.songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end

json.artists do
  json.partial! 'api/artists/artist', artist: @album.artist
end