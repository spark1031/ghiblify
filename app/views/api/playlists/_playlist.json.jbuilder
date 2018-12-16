json.set! playlist.id do
  json.extract! playlist, :id, :name
  if playlist.cover_url.attached?
    json.cover_url url_for(artist.cover_url)
  end
end
