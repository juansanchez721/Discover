json.extract! user, :id, :username
json.trackLikes user.likes.where(likeable_type: "Track").pluck(:likeable_id) if user.id === current_user.id


json.image_url url_for(user.photo) if user.photo.attached?
