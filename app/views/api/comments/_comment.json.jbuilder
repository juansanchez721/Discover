json.extract! comment, :id, :track_id, :commenter_id, :body, :created_at
json.username comment.user.username

if comment.subcomments.length > 0
    
    json.subcomments do 
        comment.subcomments.each do |subcomment|
               json.set! subcomment.id  do
                  json.extract! subcomment, :body, :id, :created_at
                  json.user subcomment.user.username
               end

        end
    end
end