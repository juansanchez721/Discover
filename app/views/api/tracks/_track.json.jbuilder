json.extract! track, :id, :title, :owner_id

json.image_url url_for(track.photo) if track.photo.attached?
json.track_url url_for(track.track) if track.track.attached?
