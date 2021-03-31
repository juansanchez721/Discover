

export const createLike = trackId => {
    // debugger
    return $.ajax({
        type: "POST",
        url: "api/likes",
        data: { like: {
            likeable_id: trackId,
            likeable_type: "Track"
        }}
        // contentType: false,
        // processData: false
    })
}

export const deleteLike = trackId => {
    // debugger
    return $.ajax({
        type: "DELETE",
        url: "api/likes/-1",
        data: { like: {
            likeable_id: trackId,
            likeable_type: "Track"
        }}

    })
}

export const fetchTrackLikes = userId => {
    // debugger
    return $.ajax({
        type: 'GET',
        url: `/api/users/${userId}/likes`
    })
}