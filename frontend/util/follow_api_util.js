

export const fetchUserFollows = userId => {
    return $.ajax({
        type:'GET',
        url: `/api/users/${userId}/follows`
    })
}

export const deleteFollow = userId => {
    return $.ajax({
        type: 'DELETE',
        url: `/api/follows/-1`,
        data: { follow: {
            followee_id: userId
        }
    }
    })
}

export const createFollow = userId => {
    return $.ajax({
        type: 'POST',
        url: '/api/follows',
        data: { follow: {
            followee_id: userId
        }
    }

    })
}

export const createFollowCurrentUser = (currentUserId, userId) => {
    return $.ajax({
        type: 'POST',
        url: '/api/follows',
        data: { follow: {
            followee_id: userId,
            currentUserId
        }
    }

    })
}

export const deleteFollowCurrentUser = (currentUserId, userId) => {
    return $.ajax({
        type: 'DELETE',
        url: `/api/follows/-1`,
        data: { follow: {
            followee_id: userId,
            currentUserId
        }
    }
    })
}
