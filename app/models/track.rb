class Track < ApplicationRecord

    validates :title, :owner_id, presence: true

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

    has_one_attached :photo
    has_one_attached :track
end
