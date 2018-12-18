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
user1 = User.create!(username: "kiki", email: "kikilovescode@gmail.com", password: "password")
user2 = User.create!(username: "chihiro", email: "chihirolovescode@gmail.com", password: "password")
user3 = User.create!(username: "howl-jenks", email: "howllovescode@gmail.com", password: "password")
user4 = User.create!(username: "kodama", email: "littleforestghost@gmail.com", password: "password")
user5 = User.create!(username: "nahhhface", email: "nofacelovescode@gmail.com", password: "password")

#SPIRITED AWAY SOUNDTRACK
artist1 = Artist.create!(name: "Joe Hisaishi")
artist1.photo_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/images/joe_hisaishi.png'), filename: "joe_hisaishi.png"})

album1 = Album.create!(title: "Spirited Away Soundtrack", year: 2001, genre: "Ghibli", artist: artist1)
album1.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/images/spirited_away_cover.png'), filename: "sprited_away.png"})

song1 = Song.create!(title: "One Summer's Day", duration: 189, artist: artist1, album: album1)
song1.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+01+-+Ano+Natsu+He.mp3'), filename: 'ano.mp3'})

song2 = Song.create!(title: "The Passage", duration: 127, artist: artist1, album: album1)
song2.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+02+-+Toorimichi.mp3'), filename: 'toorimichi.mp3'})

song3 = Song.create!(title: "The Abandoned Restaurant", duration: 195, artist: artist1, album: album1)
song3.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+03+-+Dare+Mo+Inai+Ryouriten.mp3'), filename: 'dare.mp3'})

song4 = Song.create!(title: "Night is Coming", duration: 120, artist: artist1, album: album1)
song4.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+04+-+Yoru+Kitaru.mp3'), filename: 'yoru.mp3'})

song5 = Song.create!(title: "Dragon Boy", duration: 132, artist: artist1, album: album1)
song5.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+05+-+Ryuu+no+Shounen.mp3'), filename: 'ryuu.mp3'})

song6 = Song.create!(title: "Sootballs", duration: 153, artist: artist1, album: album1)
song6.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+06+-+Boiraa+Mushi.mp3'), filename: 'boiraa.mp3'})

song7 = Song.create!(title: "Procession of the Gods", duration: 180, artist: artist1, album: album1)
song7.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+07+-+Kamisama-tachi.mp3'), filename: 'kamisama.mp3'})

song8 = Song.create!(title: "Yubaba", duration: 210, artist: artist1, album: album1)
song8.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+08+-+Yu-Baaba.mp3'), filename: 'yubaba.mp3'})

song9 = Song.create!(title: "Sen's Courage", duration: 165, artist: artist1, album: album1)
song9.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+13+-+Sen+no+Yuuki.mp3'), filename: 'sen.mp3'})

song10 = Song.create!(title: "No-Face", duration: 227, artist: artist1, album: album1)
song10.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+15+-+Kaonashi.mp3'), filename: 'kaonashi.mp3'})

song11 = Song.create!(title: "Going Home", duration: 200, artist: artist1, album: album1)
song11.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Joe+Hisaishi+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+20+-+Kaeru+Hi.mp3'), filename: 'kaeru.mp3'})

song12 = Song.create!(title: "Always with Me", duration: 215, artist: artist1, album: album1)
song12.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Spirited+Away/songs/Youmi+Kimura+-+Sen+to+Chihiro+no+Kamikakushi+Soundtrack+-+21+-+Itsumo+Nando+Demo.mp3'), filename: 'itsumo.mp3'})



# HOWL'S MOVING CASTLE SOUNDTRACK
album2 = Album.create!(title: "Howl's Moving Castle (Original Soundtrack)", year: 2004, genre: "Ghibli", artist: artist1)
album2.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/images/howls_moving_castle_cover.png'), filename: "howls.png"})

song13 = Song.create!(title: "Opening: The Merry-Go-Round Of Life", duration: 154, artist: artist1, album: album2)
song13.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+01+-+-Opening-+Jinsei+no+Merry-go-round.mp3'), filename: "opening.mp3"})

song14 = Song.create!(title: "Stroll Through the Sky", duration: 135, artist: artist1, album: album2)
song14.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+03+-+Kuuchuu+Sanpo.mp3'), filename: "kuuchuu.mp3"})

song15 = Song.create!(title: "Heart Aflutter", duration: 20, artist: artist1, album: album2)
song15.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+04+-+Tokimeki.mp3'), filename: "tokimeki.mp3"})

song16 = Song.create!(title: "The Indelible Curse", duration: 45, artist: artist1, album: album2)
song16.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+08+-+Kienai+Noroi.mp3'), filename: "kienai.mp3"})

song17 = Song.create!(title: "Sulliman's Magic Square: Return to the Castle", duration: 323, artist: artist1, album: album2)
song17.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+15+-+Sulliman+no+Mahoujin+~Shiro+he+no+Kikan.mp3'), filename: "sulliman.mp3"})

song18 = Song.create!(title: "Moving", duration: 185, artist: artist1, album: album2)
song18.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+17+-+Hikkoshi.mp3'), filename: "hikkoshi.mp3"})

song19 = Song.create!(title: "Now That's Love", duration: 72, artist: artist1, album: album2)
song19.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+20+-+Koi+da+ne.mp3'), filename: "koi.mp3"})

song20 = Song.create!(title: "Sophie's Castle", duration: 159, artist: artist1, album: album2)
song20.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+24+-+Sophie+no+Shiro.mp3'), filename: "sophie.mp3"})

song21 = Song.create!(title: "Ending: The Promise of the World", duration: 411, artist: artist1, album: album2)
song21.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Howls+Moving+Castle/songs/Joe+Hisaishi+-+Hauru+no+Ugoku+Shiro+Soundtrack+-+26+-+-Ending-+Sekai+no+Yakusoku+~Jinsei+no+Merry-go-round.mp3'), filename: "ending.mp3"})


# TOTORO SOUNDTRACK 1
album5 = Album.create!(title: "My Neighbor Totoro (Original Soundtrack)", year: 1988, genre: "Ghibli", artist: artist1)
album5.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/images/my_neighbor_totoro_cover.jpg'), filename: "totoro_soundtrack1.jpg"})

song32 = Song.create!(title: "A Haunted House", duration: 83, artist: artist1, album: album1)
song32.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Joe+Hisaishi+-+Tonari+no+Totoro+Soundtrack+Collection+-+03+-+Obake+Yashiki!.mp3'), filename: "obake.mp3"})

song33 = Song.create!(title: "Evening Wind", duration: 61, artist: artist1, album: album1)
song33.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Joe+Hisaishi+-+Tonari+no+Totoro+Soundtrack+Collection+-+05+-+Yuugure+no+Kaze.mp3'), filename: "yuugure.mp3"})

song34 = Song.create!(title: "Not Afraid", duration: 43, artist: artist1, album: album1)
song34.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Joe+Hisaishi+-+Tonari+no+Totoro+Soundtrack+Collection+-+06+-+Kowakunai.mp3'), filename: "kowakunai.mp3"})

song35 = Song.create!(title: "Mother", duration: 66, artist: artist1, album: album1)
song35.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Joe+Hisaishi+-+Tonari+no+Totoro+Soundtrack+Collection+-+08+-+Okaasan.mp3'), filename: "okaasan.mp3"})

song36 = Song.create!(title: "The Path of the Wind", duration: 196, artist: artist1, album: album1)
song36.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Joe+Hisaishi+-+Tonari+no+Totoro+Soundtrack+Collection+-+13+-+Kaze+no+Toorimichi+(Instrumental).mp3'), filename: "kaze.mp3"})

song37 = Song.create!(title: "Cat Bus", duration: 131, artist: artist1, album: album1)
song37.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Joe+Hisaishi+-+Tonari+no+Totoro+Soundtrack+Collection+-+17+-+Nekobasu.mp3'), filename: "neko.mp3"})




# GRAVE OF THE FIREFLIES SOUNDTRACK
artist2 = Artist.create!(name: "Michio Mamiya")
artist2.photo_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/images/41WGN5K3JQL.jpg'), filename: "michio_mamiya.jpg"})

album3 = Album.create!(title: "Graves of the Fireflies Soundtrack", year: 1998, genre: "Ghibli", artist: artist2)
album3.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/images/grave_of_the_fireflies_cover.png'), filename: "graves_of_the_fireflies.png"})

song22 = Song.create!(title: "Setsuko and Seita", duration: 177, artist: artist2, album: album3)
song22.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/songs/Michio+Mamiya+-+Hotaru+no+Haka+Soundtrack+Collection+-+01+-+Setsuko+to+Seita+-+Main+Title+(Setsuko+and+Seita+-+Main+Title).mp3'), filename: "setsuko.mp3"})

song23 = Song.create!(title: "To the Ocean", duration: 97, artist: artist2, album: album3)
song23.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/songs/Michio+Mamiya+-+Hotaru+no+Haka+Soundtrack+Collection+-+06+-+Umi+he+(To+the+Ocean).mp3'), filename: "umi.mp3"})

song24 = Song.create!(title: "The Beach", duration: 97, artist: artist2, album: album3)
song24.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/songs/Michio+Mamiya+-+Hotaru+no+Haka+Soundtrack+Collection+-+07+-+Namiuchigiwa+(The+Beach).mp3'), filename: "nami.mp3"})

song25 = Song.create!(title: "Under the Cherry Blossoms", duration: 91, artist: artist2, album: album3)
song25.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/songs/Michio+Mamiya+-+Hotaru+no+Haka+Soundtrack+Collection+-+09+-+Sakura+no+Shita+(Under+The+Cherry+Blossom).mp3'), filename: "sakura.mp3"})

song26 = Song.create!(title: "Grave of the Fireflies", duration: 106, artist: artist2, album: album3)
song26.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/songs/Michio+Mamiya+-+Hotaru+no+Haka+Soundtrack+Collection+-+14+-+Hotaru+no+Haka.mp3'), filename: "hotaru.mp3"})

song27 = Song.create!(title: "Sunset Colors", duration: 53, artist: artist2, album: album3)
song27.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Grave+Of+The+Fireflies/songs/Michio+Mamiya+-+Hotaru+no+Haka+Soundtrack+Collection+-+15+-+Yuuyake+(Sunset+Colors).mp3'), filename: "yuuyake.mp3"})


# TOTORO SOUNDTRACK 2
artist3 = Artist.create!(name: "Azumi Inoue")
artist3.photo_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/images/a40091049_s800b1b5.jpg'), filename: "azumi_inoue.jpg"})
album4 = Album.create!(title: "My Neighbor Totoro", year: 1988, genre: "Ghibli", artist: artist3)
album4.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/images/totoro_alternative.jpg'), filename: "totoro_soundtrack2.jpg"})

song28 = Song.create!(title: "Hey Let's Go", duration: 163, artist: artist3, album: album4)
song28.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Azumi+Inoue+-+Tonari+no+Totoro+Soundtrack+Collection+-+01+-+Sanpo+(Opening+Shudaika).mp3'), filename: "opening.mp3"})

song29 = Song.create!(title: "A Lost Child", duration: 228, artist: artist3, album: album4)
song29.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Azumi+Inoue+-+Tonari+no+Totoro+Soundtrack+Collection+-+12+-+Maigo.mp3'), filename: "maigo.mp3"})

song30 = Song.create!(title: "My Neighbor Totoro", duration: 257, artist: artist3, album: album4)
song30.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Azumi+Inoue+-+Tonari+no+Totoro+Soundtrack+Collection+-+19+-+Tonari+no+Totoro+(Ending+Shudaika).mp3'), filename: "tonari.mp3"})

song31 = Song.create!(title: "Hey Let's Go (with Chorus)", duration: 163, artist: artist3, album: album4)
song31.song_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/My+Neighbor+Totoro/songs/Azumi+Inoue+-+Tonari+no+Totoro+Soundtrack+Collection+-+20+-+Sanpo+(Gasshou+tsuki).mp3'), filename: "sanpo.mp3"})









album1 = Album.create!(title: "", year: , genre: "", artist: )
album1.cover_url.attach({io: EzDownload.open(''), filename: ""})

artist1 = Artist.create!(name: "")
artist1.photo_url.attach({io: EzDownload.open(''), filename: ""})

song1 = Song.create!(title: "", duration: , artist: artist1, album: album1)
song1.song_url.attach({io: EzDownload.open(''), filename: ".mp3"})



playlist1 = Playlist.create!(name: "Best of a/A", creator_id: demo.id)
playlist1.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Other/48365122_1820833841353979_6382637554398658560_n.jpg'), filename: "playlist.jpg"})
playlist2 = Playlist.create!(name: "Ghibli Mix", creator_id: demo.id)
playlist2.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Other/48365122_1820833841353979_6382637554398658560_n.jpg'), filename: "playlist.jpg"})
playlist3 = Playlist.create!(name: "Top 2018", creator_id: demo.id)
playlist3.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Other/48365122_1820833841353979_6382637554398658560_n.jpg'), filename: "playlist.jpg"})
playlist4 = Playlist.create!(name: "Totoro Faves", creator_id: demo.id)
playlist4.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Other/48365122_1820833841353979_6382637554398658560_n.jpg'), filename: "playlist.jpg"})
playlist5 = Playlist.create!(name: "Vanilla DOM ftw!", creator_id: demo.id)
playlist5.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Other/48365122_1820833841353979_6382637554398658560_n.jpg'), filename: "playlist.jpg"})
playlist6 = Playlist.create!(name: "Vanilla JS", creator_id: demo.id)
playlist6.cover_url.attach({io: EzDownload.open('https://s3.amazonaws.com/ghiblify-resources/Other/48365122_1820833841353979_6382637554398658560_n.jpg'), filename: "playlist.jpg"})

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