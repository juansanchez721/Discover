

export const fetchTrackComments = trackId => {
    return $.ajax ({
        type: 'GET',
        url:`/api/tracks/${trackId}/comments`
    })
}