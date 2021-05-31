pageTracks = {}

 json.tracks do   @likes.each do |like|
      json.set! like.likeable_id do
        json.partial! "api/tracks/track", track: like.likeable
        json.like_created_at like.created_at
      end
      if @userBool
            pageTracks[like.id]= like.likeable.id
            else
       pageTracks[like.likeable.id]= like.likeable.id
      end
end

end

json.pageTracks pageTracks