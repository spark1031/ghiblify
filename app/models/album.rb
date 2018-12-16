# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  genre      :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cover_url  :string
#

class Album < ApplicationRecord
  validates :title, :year, :genre, :cover_url, presence: true

  has_one_attached :cover_url

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

  has_many :songs,
    foreign_key: :album_id,
    class_name: 'Song'
end
