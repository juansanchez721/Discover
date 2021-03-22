@follows.each do |follow|
    json.set! follow.id do 
        json.extract! follow, :id
        json.follower follow.follower.username
        json.followee follow.followee.username
    end
end