class Track < ApplicationRecord

    validates :title, :owner_id, presence: true

    has_one_attached :photo

end
