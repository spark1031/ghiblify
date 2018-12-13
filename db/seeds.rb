# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "sparky", email: "sujinpark1031@gmail.com", password: "password")

Artist.create!(name: "Aretha Franklin")
Artist.create!(name: "Britney Spears")

Album.create!(title: "I Never Loved a Man the Way I Love You", year: 1967, genre: "Soul", artist_id: 1)
Album.create!(title: "Programming for Beginners", year: 2000, genre: "Electronic", artist_id: 2)

Song.create!(title: "RSPEC", duration: 180, artist_id: 1, album_id: 1)
Song.create!(title: "OOPs (I Did It Again)", duration: 130, artist_id: 2, album_id: 2)
Song.create!(title: "Toxic", duration: 120, artist_id: 2, album_id: 2)
