

export const fetchUserFollows = userId => {
    return $.ajax({
        type:'GET',
        url: `/api/users/${userId}/follows`
    })
}

export const deleteFollow = followId => {
    return $.ajax({
        type: 'DELETE',
        url: `/api/follows/${followId}`
    })
}

export const createFollow = userId => {
    debugger
    return $.ajax({
        type: 'POST',
        url: '/api/follows',
        data: { follow: {
            followee_id: userId
        }
    }

    })
}