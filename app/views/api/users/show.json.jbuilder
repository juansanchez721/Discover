userLikes = {}
json.user do json.extract! @user, :id, :username, :bio, :first_name, :last_name
        json.track_likes @user.likes.where(likeable_type: "Track").pluck(:likeable_id)

        json.follows @user.follows.pluck(:followee_id)
        json.followers_count @user.followers.count

        json.track_count @user.tracks.count
        json.comment_count @user.comments.count

        json.image_url url_for(@user.photo) if @user.photo.attached?
end

if @user.likes.length >= 1
json.userLikes do 
        @user.likes.order(created_at: :desc).limit(3).each do |track|
                json.set! track.id do
                  json.partial! "api/tracks/track", track: track.likeable
                end
        end
end
else
        json.userLikes userLikes
end