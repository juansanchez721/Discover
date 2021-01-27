
export const fetchTracks = () => {

    return $.ajax({
        type: "GET",
        url: 'api/tracks'
    })
}

export const fetchTrack = (trackId) => {

    return $.ajax({
        type: "GET",
        url: `api/tracks/${trackId}`
    })
}