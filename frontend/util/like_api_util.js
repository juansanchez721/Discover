

export const createLike = (trackId, location) => {
    return $.ajax({
        type: "POST",
        url: "api/likes",
        data: { like: {
            likeable_id: trackId,
            likeable_type: "Track"
        }, 
        type: location
        }
        // contentType: false,
        // processData: false
    })
}

export const deleteLike = (trackId, location) => {
    return $.ajax({
        type: "DELETE",
        url: "api/likes/-1",
        data: { like: {
            likeable_id: trackId,
            likeable_type: "Track"
        },         type: location
    }

    })
}

export const fetchTrackLikes = userId => {
    return $.ajax({
        type: 'GET',
        url: `/api/users/${userId}/likes`
    })
}