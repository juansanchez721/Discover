json.set! 'followers' do
@followers.each do |follow|
    json.set! follow.id do 
        json.extract! follow, :id
        json.entity follow.follower.username
        json.entity_id follow.follower_id
        json.entity_followers follow.follower.followers.pluck(:follower_id)
        json.image_url url_for(follow.follower.photo) if follow.follower.photo.attached?
    end
end
end

json.set! 'followings' do
@followings.each do |follow|
    json.set! follow.id do 
        json.extract! follow, :id
        json.entity follow.followee.username
        json.entity_followers follow.followee.followers.pluck(:follower_id)
        json.entity_id follow.followee_id

    end
end

end