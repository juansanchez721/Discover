

export const fetchTrackComments = trackId => {
    return $.ajax ({
        type: 'GET',
        url:`/api/tracks/${trackId}/comments`
    })
}

export const fetchUserComments = userId => {
    return $.ajax ({
        type: 'GET',
        url:`/api/users/${userId}/comments`
    })
}


export const createComment = comment => {
    return $.ajax({
        type: 'POST',
        url: `/api/comments`,
        data: comment,
        contentType: false,
        processData: false
    })
}

export const deleteComment = commentId => {
    return $.ajax({
        type: 'DELETE',
        url: `/api/comments/${commentId}`
    })
}