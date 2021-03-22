class Follow < ApplicationRecord

    validates :follower_id, :followee_id, presence: true

    belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :followee,
    foreign_key: :followee_id,
    class_name: :User
    
    def self.get_followers(followee_id)

        Follow.where(followee_id: followee_id )   #gets user's followers

    end

    def self.get_follows(follower_id)

        Follow.where(follower_id: follower_id )   #gets user's follows

    end


end


