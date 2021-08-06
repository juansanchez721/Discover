class Track < ApplicationRecord

    validates :title, :owner_id, presence: true

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

    has_many :comments,
    foreign_key: :track_id,
    class_name: :Comment

    has_many :likes, as: :likeable,
    dependent: :destroy

    has_one_attached :photo
    has_one_attached :track


    def self.search_method(entity)
        Track
        .where("LOWER(title) LIKE ?", "%#{entity.downcase}%")
        .limit(4)

    end

end
