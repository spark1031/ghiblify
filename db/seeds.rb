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

User.create!(username: "sparky", email: "sujinpark1031@gmail.com", password: "password")

artist1 = Artist.create!(name: "Aretha Franklin")
artist2 = Artist.create!(name: "Britney Spears")

album1 = Album.create!(title: "I Never Loved a Man the Way I Love You", year: 1967, genre: "Soul", artist: artist1)
album2 = Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist: artist2)
album2.cover_url.attach({io: EzDownload.open('https://s3-us-west-1.amazonaws.com/ghiblify-dev/britney_spears.jpeg'), filename: "britney_album.jpeg"})

Song.create!(title: "RSPEC", duration: 180, artist: artist1, album: album1)
Song.create!(title: "OOPs (I Did It Again)", duration: 130, artist: artist2, album: album2)
Song.create!(title: "Toxic", duration: 120, artist: artist2, album: album2)
