class Playlist < ApplicationRecord
  validates :name, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: 'User'
end
