# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Song.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

demo = User.create!(username: "totoro", email: "totolovescode@gmail.com", password: "password")

artist1 = Artist.create!(name: "Aretha Franklin")
artist1.photo_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})
artist2 = Artist.create!(name: "Britney Spears")
artist2.photo_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})

album1 = Album.create!(title: "I Never Loved a Man the Way I Love You", year: 1967, genre: "Soul", artist: artist1)
album1.cover_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})
album2 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2)
album2.cover_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})
album3 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2)
album3.cover_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})
album4 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2)
album4.cover_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})
album5 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2)
album5.cover_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})
album6 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2)
album6.cover_url.attach({io: EzDownload.open('https://albumartexchange.com/coverart/gallery/va/variousartists_studioghiblisongs_6bs7.jpg'), filename: "britney_album.jpeg"})

song1 = Song.create!(title: "RSPEC", duration: 180, artist: artist1, album: album1)
song1.song_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/01+-+Ano+hi+no+Kawa+he.flac'), filename: "01_anohino_kawahe.flac"})
song2 = Song.create!(title: "OOPs (I Did It Again)", duration: 130, artist: artist2, album: album2)
song2.song_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/01+-+Ano+hi+no+Kawa+he.flac'), filename: "01_anohino_kawahe.flac"})
song3 = Song.create!(title: "Toxic", duration: 120, artist: artist2, album: album2)
song3.song_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/01+-+Ano+hi+no+Kawa+he.flac'), filename: "01_anohino_kawahe.flac"})

playlist1 = Playlist.create!(name: "Best of a/A", creator_id: demo.id)

playlist_song1 = PlaylistSong.create!(song: song1, playlist: playlist1)
playlist_song2 = PlaylistSong.create!(song: song2, playlist: playlist1)
playlist_song3 = PlaylistSong.create!(song: song3, playlist: playlist1)

# demo = User.create!(username: "totoro", email: "totolovescode@gmail.com", password: "password")

# artist1 = Artist.create!(name: "Aretha Franklin")
# artist1.photo_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg'), filename: "britney_album.jpeg"})
# artist2 = Artist.create!(name: "Britney Spears")
# artist2.photo_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg'), filename: "britney_album.jpeg"})

# album1 = Album.create!(title: "I Never Loved a Man the Way I Love You", year: 1967, genre: "Soul", artist: artist1)
# album1.cover_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg'), filename: "britney_album.jpeg"})
# album2 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2)
# album2.cover_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg'), filename: "britney_album.jpeg"})

# song1 = Song.create!(title: "RSPEC", duration: 180, artist: artist1, album: album1)
# song1.song_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/01+-+Ano+hi+no+Kawa+he.flac'), filename: "01_anohino_kawahe.flac"})
# song2 = Song.create!(title: "OOPs (I Did It Again)", duration: 130, artist: artist2, album: album2)
# song2.song_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/01+-+Ano+hi+no+Kawa+he.flac'), filename: "01_anohino_kawahe.flac"})
# song3 = Song.create!(title: "Toxic", duration: 120, artist: artist2, album: album2)
# song3.song_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/01+-+Ano+hi+no+Kawa+he.flac'), filename: "01_anohino_kawahe.flac"})

# playlist1 = Playlist.create!(name: "Best of a/A", creator_id: demo.id)

# playlist_song1 = PlaylistSong.create!(song: song1, playlist: playlist1)
# playlist_song2 = PlaylistSong.create!(song: song2, playlist: playlist1)
# playlist_song3 = PlaylistSong.create!(song: song3, playlist: playlist1)

############################






# demo = User.create!(username: "totoro", email: "toto.loves.vanilladom@gmail.com", password: "password")

# artist1 = Artist.create!(name: "Aretha Franklin", photo_url: 'https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg')
# artist2 = Artist.create!(name: "Britney Spears", photo_url: 'https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg')

# album1 = Album.create!(title: "I Never Loved a Man the Way I Love You", year: 1967, genre: "Soul", artist: artist1, cover_url: 'https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg')
# album2 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2, cover_url: 'https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg')

# song1 = Song.create!(title: "RSPEC", duration: 180, artist: artist1, album: album1, song_url: 'https://s3-us-west-1.amazonaws.com/ghiblify-dev/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+01+-+-Opening-+Jinsei+no+Merry-go-round.mp3')
# song2 = Song.create!(title: "OOPs (I Did It Again)", duration: 130, artist: artist2, album: album2, song_url: 'https://s3-us-west-1.amazonaws.com/ghiblify-dev/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+01+-+-Opening-+Jinsei+no+Merry-go-round.mp3')
# song3 = Song.create!(title: "Toxic", duration: 120, artist: artist2, album: album2, song_url: 'https://s3-us-west-1.amazonaws.com/ghiblify-dev/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+01+-+-Opening-+Jinsei+no+Merry-go-round.mp3')

# playlist1 = Playlist.create!(name: "Best of a/A", creator_id: demo.id)

# playlist_song1 = PlaylistSong.create!(song: song1, playlist: playlist1)
# playlist_song2 = PlaylistSong.create!(song: song2, playlist: playlist1)
# playlist_song3 = PlaylistSong.create!(song: song3, playlist: playlist1)