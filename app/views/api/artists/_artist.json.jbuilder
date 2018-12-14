json.set! artist.id do
  json.extract! artist, :id, :name
  if artist.photo_url.attached?
    json.photo_url url_for(artist.photo_url)
  end
end

