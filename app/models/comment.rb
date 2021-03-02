class Comment < ApplicationRecord

    validates :track_id, :commenter_id, :body, presence: true  

    belongs_to :track,
    foreign_key: :track_id,
    class_name: :Track



end
