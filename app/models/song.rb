# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  duration   :integer          not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  song_url   :string
#

class Song < ApplicationRecord
  validates :title, :duration, :song_url, presence: true

  has_one_attached :song_url

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

  belongs_to :album,
    foreign_key: :album_id,
    class_name: 'Album'
  
  has_many :playlist_songs,
    foreign_key: :song_id,
    class_name: 'PlaylistSong'
  
  has_many :playlists,
    through: :playlist_songs,
    source: :playlist
  
end
