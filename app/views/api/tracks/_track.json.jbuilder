json.extract! track, :id, :title, :owner_id

json.image_url url_for(track.photo)
json.track_url url_for(track.song)
