json.songs do
  @songs.each do |song|
    json.partial! 'api/songs/song', song_id: song.id
  end
end

json.albums do
  @songs.each do |song|
    json.partial! 'api/albums/album', album_id: song.album_id
  end
end

json.artists do
  @songs.each do |song|
    json.partial! 'api/artists/artist', artist_id: song.artist_id
  end
end