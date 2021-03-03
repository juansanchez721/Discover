json.extract! comment, :id, :track_id, :commenter_id, :body, :created_at
        json.username comment.user.username
