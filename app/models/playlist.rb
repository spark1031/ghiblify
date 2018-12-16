# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :name, presence: true

  has_one_attached :cover_url

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'
  
  has_many :playlist_songs,
    foreign_key: :playlist_id,
    class_name: 'PlaylistSong'
  
  has_many :songs,
    through: :playlist_songs,
    source: :song
  
  has_many :albums,
    through: :songs,
    source: :album
  
  has_many :artists,
    through: :songs,
    source: :artist
end
