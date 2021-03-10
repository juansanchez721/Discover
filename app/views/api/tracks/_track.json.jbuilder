json.extract! track, :id, :title, :owner_id, :genre, :description, :created_at
json.likers track.likes.pluck(:liker_id)
json.comment_count track.comments.count
json.image_url url_for(track.photo) if track.photo.attached?
json.track_url url_for(track.track) if track.track.attached?
