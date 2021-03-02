@comments.each do |comment|
    json.set! comment.id do
        json.username comment.user.username
        json.partial! "api/comments/comment", comment: comment
    end

end