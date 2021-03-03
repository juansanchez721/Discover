class Like < ApplicationRecord

    # attr_accessible :user, :likeable

    validates :liker_id, :likeable_id, :likeable_type, presence: true
    validates :liker_id, uniqueness: { :scope => [:likeable_type, :likeable_id] }

    belongs_to :user,
    foreign_key: :liker_id,
    class_name: :User

    belongs_to :likeable, polymorphic: true

end
