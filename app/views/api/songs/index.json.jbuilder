json.songs do
  @songs.each do |song|
    json.partial! 'api/songs/song', song: song
  end
end

json.albums do
  @songs.each do |song|
    json.partial! 'api/albums/album', album: song.album
  end
end

json.artists do
  @songs.each do |song|
    json.partial! 'api/artists/artist', artist: song.artist
  end
end