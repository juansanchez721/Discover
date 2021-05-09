
json.set! "tracks" do
    @tracks.each do |track|

        json.set! track.id do 
            json.extract! track, :id, :title
            json.artist track.user.username 
        end

    end

end

json.set! "artists" do 
    @artists.each do |artist|

        json.set! artist.id do 
            json.extract! artist, :id, :username
        end

    end
end