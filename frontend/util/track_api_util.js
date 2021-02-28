
export const fetchTracks = () => {

    return $.ajax({
        type: "GET",
        url: 'api/tracks'
    })
}

export const fetchSingleUserTracks = (userId) => {

    return $.ajax({
        type: "GET",
        url: `api/users/${userId}/tracks`
    })
}

export const fetchTrack = (trackId) => {

    return $.ajax({
        type: "GET",
        url: `api/tracks/${trackId}`
    })
}

export const createTrack = (track) => {

    return $.ajax({
        type: "POST",
        url: `api/tracks`,
        data:  track ,
        contentType: false,
        processData: false
    })
}


export const deleteTrack = (trackId) => {

    return $.ajax({
        type: "DELETE",
        url: `/api/tracks/${trackId}`
    })
}

export const updateTrack = (track, trackId) => {
    debugger
    return $.ajax({
        type: "PATCH",
        url: `api/tracks/${trackId}`,
        data:  track ,
        contentType: false,
        processData: false
    })
}