pageTracks = {}
json.tracks do @tracks.each do |track|
                json.set! track.id do
                  json.partial! "api/tracks/track", track: track
                end
              pageTracks[track.id]= track.id
            end
end

json.pageTracks pageTracks