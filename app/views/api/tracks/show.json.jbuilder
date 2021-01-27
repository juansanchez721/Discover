json.set! @track.id do
    json.partial! "api/tracks/track", track: @track
  end