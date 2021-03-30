json.extract! comment, :id, :track_id, :commenter_id, :body, :created_at, :parent_comment_id
json.username comment.user.username
json.image_url url_for(comment.user.photo) if comment.user.photo.attached?
json.track comment.track.title