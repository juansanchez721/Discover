class Comment < ApplicationRecord

    validates :track_id, :commenter_id, :body, presence: true  

    belongs_to :track,
    foreign_key: :track_id,
    class_name: :Track

    belongs_to :user,
    foreign_key: :commenter_id,
    class_name: :User


    belongs_to :parent_comment,
    foreign_key: :parent_comment_id,
    class_name: :Comment,
    optional: true

    has_many :subcomments,
    foreign_key: :parent_comment_id,
    class_name: :Comment,
    dependent: :destroy

end
