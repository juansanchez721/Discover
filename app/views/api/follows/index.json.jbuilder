json.set! 'followers' do
@followers.each do |follow|
    json.partial! 'api/follows/follow', follow: follow
    
end
end

json.set! 'followings' do
@followings.each do |follow|
    json.set! follow.id do 
        json.extract! follow, :id
        json.entity follow.followee.username
        json.image_url url_for(follow.followee.photo) if follow.followee.photo.attached?
        json.entity_followers follow.followee.followers.pluck(:follower_id)
        json.entity_id follow.followee_id

    end
end

end