json.extract! user, :id, :username
json.track_likes user.likes.where(likeable_type: "Track").pluck(:likeable_id)

json.followers user.followers.pluck(:id, :follower_id)


json.track_count user.tracks.count
json.comment_count user.comments.count

json.image_url url_for(user.photo) if user.photo.attached?
