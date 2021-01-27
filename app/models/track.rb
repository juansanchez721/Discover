class Track < ApplicationRecord

    validates :title, :owner_id, presence: true

    has_one_attached :photo
    has_one_attached :song
end
