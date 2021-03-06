json.extract! user, :id, :username
json.track_likes user.likes.where(likeable_type: "Track").pluck(:likeable_id) if user.id === current_user.id
json.track_count user.tracks.count

json.image_url url_for(user.photo) if user.photo.attached?
