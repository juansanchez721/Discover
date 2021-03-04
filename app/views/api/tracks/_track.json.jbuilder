json.extract! track, :id, :title, :owner_id, :genre, :description, :created_at
json.like_count track.likes.count

json.image_url url_for(track.photo) if track.photo.attached?
json.track_url url_for(track.track) if track.track.attached?
