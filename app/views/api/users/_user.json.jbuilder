userLikes = {}

json.extract! user, :id, :username, :bio, :first_name, :last_name
json.track_likes user.likes.where(likeable_type: "Track").pluck(:likeable_id)

json.follows user.follows.pluck(:followee_id)
json.followers_count user.followers.count

json.track_count user.tracks.count
json.comment_count user.comments.count

json.image_url url_for(user.photo) if user.photo.attached?

if user.likes.length >= 1

json.userLikes do user.likes.order(created_at: :desc).limit(3).each do |track|
                json.set! track.id do
                  json.extract! track.likeable, :id, :title, :owner_id, :genre, :description, :created_at
                        json.likers track.likeable.likes.pluck(:liker_id)
                        json.artist track.likeable.user.username
                        json.comment_count track.likeable.comments.count
                        json.image_url url_for(track.likeable.photo) if track.likeable.photo.attached?
                        json.track_url url_for(track.likeable.track) if track.likeable.track.attached?

                end
        end
end
else
        json.userLikes userLikes
end